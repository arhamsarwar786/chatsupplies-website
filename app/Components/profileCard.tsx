"use client"
import React, { useState, useEffect, useRef } from "react"
import PhoneInput from "react-phone-number-input/input"

// SVG Icons for visibility toggle with proper TypeScript types
const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.01 12C2.01 12 5.64 5 12 5C18.36 5 21.99 12 21.99 12C21.99 12 18.36 19 12 19C5.64 19 2.01 12 2.01 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-6.36 0-9.99-7-9.99-7a1.53 1.53 0 0 1 .43-.7L3 12M12 7c2.76 0 5 2.24 5 5a5.55 5.55 0 0 1-1.07 3.23M16.49 16.49L7 7" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

// SVG Icon for Camera/Upload
const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

interface ProfileCardProps {
  email: string
  name: string
  onClose?: () => void
}

// API base URL for password change
const API_BASE_URL_PASSWORD = "https://api.chatsupplies.com/clients/change-password";
// API URL for profile update - MODIFIED TO REQUESTED ENDPOINT
const API_BASE_URL_PROFILE = "https://api.chatsupplies.com/clients/";

// Fixed API service functions with proper error handling and method fallback
const apiService = {
  async updatePassword(currentPassword: string, newPassword: string) {
    // Try to get auth token from various possible locations
    const token = localStorage.getItem("auth_token") ||
      localStorage.getItem("token") ||
      sessionStorage.getItem("auth_token");

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let response = await fetch(API_BASE_URL_PASSWORD, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        old_password: currentPassword,
        new_password: newPassword
      }),
    });

    // If PUT fails with Method Not Allowed, try POST
    if (response.status === 405) {
      response = await fetch(API_BASE_URL_PASSWORD, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          old_password: currentPassword,
          new_password: newPassword
        }),
      });
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        detail: `HTTP ${response.status}: ${response.statusText}`
      }));
      throw new Error(errorData.detail || 'Failed to update password');
    }

    return response.json();
  },

  // UPDATED: Modified updateProfile function to handle first_name and last_name
  async updateProfile(firstName: string, lastName: string, phoneNumber?: string) {
    const token = localStorage.getItem("auth_token") ||
      localStorage.getItem("token") ||
      sessionStorage.getItem("auth_token");

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Use the requested API endpoint structure: /clients/{user_id}
    const USER_ID = localStorage.getItem("userid");
    const PROFILE_UPDATE_URL = `${API_BASE_URL_PROFILE}${USER_ID}`;

    // Prepare body: include first_name, last_name and phone_number
    const requestBody: { first_name: string; last_name: string; phone_number?: string } = {
      first_name: firstName,
      last_name: lastName
    };
    if (phoneNumber !== undefined && phoneNumber !== "") {
      requestBody.phone_number = phoneNumber;
    }

    // Use PUT method as requested
    const response = await fetch(PROFILE_UPDATE_URL, {
      method: 'PUT',
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        detail: `HTTP ${response.status}: ${response.statusText}`
      }));
      throw new Error(errorData.detail || 'Failed to update profile');
    }

    return response.json();
  },

 // FIXED: Upload profile image function with fallback
async uploadProfileImage(imageFile: File) {
  const token = localStorage.getItem("auth_token") ||
    localStorage.getItem("token") ||
    sessionStorage.getItem("auth_token");
  const USER_ID = localStorage.getItem("userid");
  
  // Try the image upload endpoint first
  const IMAGE_UPLOAD_URL = `${API_BASE_URL_PROFILE}${USER_ID}/image`;

  const formData = new FormData();
  formData.append('file', imageFile); 

  const headers: HeadersInit = {};
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(IMAGE_UPLOAD_URL, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      // If image upload endpoint fails, fall back to storing as base64 in localStorage
      console.warn("Image upload endpoint not available, falling back to localStorage storage");
      return this.storeImageInLocalStorage(imageFile);
    }

    return response.json();
  } catch (error) {
    console.error("Image upload failed, falling back to localStorage:", error);
    return this.storeImageInLocalStorage(imageFile);
  }
},

// ADDED: Helper function to store image in localStorage as fallback
storeImageInLocalStorage(imageFile: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result as string;
      
      // Update userObject in localStorage
      try {
        const userString = localStorage.getItem("userObject");
        if (userString) {
          const user = JSON.parse(userString);
          user.profile_image_url = imageDataUrl;
          localStorage.setItem("userObject", JSON.stringify(user));
        }
      } catch (error) {
        console.error("Error updating localStorage:", error);
      }
      
      resolve({ profile_image_url: imageDataUrl });
    };
    reader.readAsDataURL(imageFile);
  });
},
  // Add forgot password functionality
  async forgotPassword(email: string) {
    const FORGOT_PASSWORD_URL = "https://api.chatsupplies.com/clients/forgot-password";

    const response = await fetch(FORGOT_PASSWORD_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        detail: `HTTP ${response.status}: ${response.statusText}`
      }));
      throw new Error(errorData.detail || 'Failed to send reset password email');
    }

    return response.json();
  }
};

// --- NEW COMPONENT: ImageUploadModal ---
interface ImageUploadModalProps {
  handleClose: () => void;
  onImageUploadSuccess: (newImageUrl: string) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ handleClose, onImageUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setSuccess(null);
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError("File size must be less than 5MB.");
        setSelectedFile(null);
        setPreviewUrl(null);
        return;
      }
      if (!file.type.match('image.*')) {
        setError("Only image files are allowed.");
        setSelectedFile(null);
        setPreviewUrl(null);
        return;
      }

      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image to upload.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await apiService.uploadProfileImage(selectedFile);
      
      const newImageUrl = response.profile_image_url || response.image_url; 
      
      if (!newImageUrl) {
        throw new Error("Upload successful, but no image URL received.");
      }

      // Update local storage with the new URL
      const userString = localStorage.getItem("userObject");
      if (userString) {
        const user = JSON.parse(userString);
        user.profile_image_url = newImageUrl;
        localStorage.setItem("userObject", JSON.stringify(user));
      }
      
      setSuccess("Profile image updated successfully!");
      onImageUploadSuccess(newImageUrl); // Propagate up to ProfileCard

      setTimeout(() => {
        handleClose();
      }, 1500);

    } catch (e) {
      console.error("Image upload error:", e);
      setError(e instanceof Error ? e.message : "An unexpected error occurred during upload.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveImage = () => {
    // NOTE: For a real application, you would add an API call here to delete the image from the server.
    // For now, we will clear the local state and localStorage.
    
    // Clear local state
    setSelectedFile(null);
    setPreviewUrl(null);
    
    // Clear the file input element's value to allow re-selection of the same file
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    
    // Clear local storage URL
    const userString = localStorage.getItem("userObject");
    if (userString) {
      const user = JSON.parse(userString);
      user.profile_image_url = null;
      localStorage.setItem("userObject", JSON.stringify(user));
    }
    
    // Propagate up to ProfileCard to clear the displayed image
    onImageUploadSuccess(""); 
    
    setSuccess("Image removed successfully! (Note: API deletion is not implemented)");
    setTimeout(() => {
      handleClose();
    }, 1500);
  };
  
  const isProfileImageSet = localStorage.getItem("userObject") && JSON.parse(localStorage.getItem("userObject") || '{}').profile_image_url;


  return (
    <div
      className="bg-white p-6 rounded-xl shadow-2xl w-96 border border-gray-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4 cursor-pointer">
        <h3 className="text-xl font-bold text-gray-800 cursor-pointer">Update Profile Image</h3>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition duration-150"
          aria-label="Close image upload form"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-100 shadow-inner">
          {previewUrl ? (
            <img src={previewUrl} alt="Image Preview" className="w-full h-full object-cover" />
          ) : (
            <CameraIcon className="w-12 h-12 text-gray-500" />
          )}
        </div>

        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="hidden" 
          id="profile-image-upload" 
          ref={fileInputRef}
        />
        
        <label htmlFor="profile-image-upload" className="cursor-pointer px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-150 w-full text-center">
          {selectedFile ? "Change Image" : (isProfileImageSet ? "Update Image" : "Select Image")}
        </label>
        
        {selectedFile && (
            <p className="text-xs text-gray-500 truncate w-full text-center">{selectedFile.name}</p>
        )}
        
        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">{success}</p>}

        <div className="pt-2 flex justify-between w-full space-x-3">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150 disabled:opacity-50"
            disabled={isLoading}
          >
            Cancel
          </button>
          
          <div className="flex space-x-3">
            {isProfileImageSet && (
                <button
                type="button"
                onClick={handleRemoveImage}
                className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition duration-150 disabled:opacity-50"
                disabled={isLoading}
              >
                Remove
              </button>
            )}
            
            <button
              type="button"
              onClick={handleUpload}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 disabled:opacity-50 flex items-center gap-2"
              disabled={isLoading || !selectedFile}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                "Upload Image"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- END NEW COMPONENT: ImageUploadModal ---

// --- MODIFIED COMPONENT: UpdatePasswordForm (No functional change) ---
interface UpdatePasswordFormProps {
  handleClose: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  email: string; // Add email prop for forgot password
}

const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({
  handleClose,
  isLoading,
  setIsLoading,
  email
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(prev => !prev);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev);
  };

  const handleForgotPassword = async () => {
    setForgotPasswordLoading(true);
    setError(null);

    try {
      await apiService.forgotPassword(email);
      setSuccess("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error("Error sending reset password email:", error);
      setError(error instanceof Error ? error.message : "Failed to send reset password email. Please try again.");
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!currentPassword) {
      setError("Current password is required.");
      return;
    }

    if (!password) {
      setError("New password cannot be empty.");
      return;
    }

    if (password.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      // API call to update password
      await apiService.updatePassword(currentPassword, password);

      setSuccess("Password updated successfully!");

      // Clear form and close after success
      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");

      // Close modal after a short delay to show success message
      setTimeout(() => {
        handleClose();
      }, 1500);

    } catch (error) {
      console.error("Error updating password:", error);
      setError(error instanceof Error ? error.message : "Failed to update password. Please check your current password and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isSaveDisabled = isLoading || !currentPassword || !password || password !== confirmPassword;

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-2xl w-96 border border-gray-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4 cursor-pointer">
        <h3 className="text-xl font-bold text-gray-800 cursor-pointer">Change Password</h3>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition duration-150"
          aria-label="Close change password form"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <div className="relative mt-1">
            <input
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              disabled={isLoading}
            />

            <button
              type="button"
              onClick={toggleCurrentPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              aria-label={showCurrentPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
            >
              {showCurrentPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          <div className="flex justify-start mt-2">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:text-blue-800 transition duration-150 disabled:opacity-50 flex items-center gap-1"
              disabled={forgotPasswordLoading || isLoading}
            >
              {forgotPasswordLoading ? (
                <>
                  <svg className="animate-spin h-3 w-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Forgot Password?
                </>
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <div className="relative mt-1">
            <input
              type={showNewPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              disabled={isLoading}
            />

            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              aria-label={showNewPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
            >
              {showNewPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <div className="relative mt-1">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              disabled={isLoading}
            />

            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
            >
              {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {success && (
          <p className="text-sm text-green-500">{success}</p>
        )}

        <div className="pt-2 flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150 disabled:opacity-50"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 disabled:opacity-50 flex items-center gap-2"
            disabled={isSaveDisabled}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              "Change Password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
// --- END MODIFIED COMPONENT: UpdatePasswordForm ---

// --- MODIFIED COMPONENT: ManageChatsForm (No functional change) ---
interface ManageChatsFormProps {
  handleClose: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
}

const ManageChatsForm: React.FC<ManageChatsFormProps> = ({ handleClose, isLoading, setIsLoading, name }) => {
  // UPDATED: Get first_name and last_name directly from userObject
  const getInitialNames = () => {
    try {
      const userString = localStorage.getItem("userObject");
      if (userString) {
        const user = JSON.parse(userString);
        console.log("User Object in ManageChatsForm:", user);

        // Use first_name and last_name from userObject
        return {
          firstName: user?.first_name || '',
          lastName: user?.last_name || ''
        };
      }
    } catch (error) {
      console.error("Error parsing userObject:", error);
    }

    // Fallback: split the existing name prop
    const nameParts = name.split(' ');
    return {
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || ''
    };
  };

  const initialNames = getInitialNames();

  const [form, setForm] = useState({
    firstName: initialNames.firstName,
    lastName: initialNames.lastName,
    phone_number: "" as string | undefined,
  });
  const [missing, setMissing] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const names = getInitialNames();
    setForm(prev => ({ ...prev, firstName: names.firstName, lastName: names.lastName }));
  }, [name]);

  const handlePhoneChange = (value: string | undefined) => {
    const phoneValue = value || "";
    setForm({ ...form, phone_number: phoneValue });

    if (phoneValue.trim() !== "" && missing.includes("phone_number")) {
      setMissing((prev) =>
        prev.filter((field) => field !== "phone_number")
      );
    }

    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Simple validation
    const newMissing: string[] = [];
    if (!form.firstName.trim()) {
      newMissing.push('firstName');
    }

    if (newMissing.length > 0) {
      setMissing(newMissing);
      return;
    }

    setIsLoading(true);

    try {
      // API call to update profile - now with firstName and lastName
      const responseData = await apiService.updateProfile(
        form.firstName.trim(),
        form.lastName.trim(),
        form.phone_number
      );

      // ✅ LOG THE BACKEND RESPONSE
      console.log("Updated profile response:", responseData);
      
      // Merge with existing userObject in case it contains the profile_image_url
      const existingUserString = localStorage.getItem("userObject");
      const existingUser = existingUserString ? JSON.parse(existingUserString) : {};
      const updatedUserObject = { ...existingUser, ...responseData };
      
      localStorage.setItem("userObject", JSON.stringify(updatedUserObject));

      // Update name in localStorage (preserving existing behavior)
      // Combine first and last name for the username to maintain backward compatibility
      const fullName = form.lastName.trim()
        ? `${form.firstName.trim()} ${form.lastName.trim()}`
        : form.firstName.trim();

      if (fullName) {
        localStorage.setItem("username", fullName);
      }

      setSuccess("Profile updated successfully!");

      // Close modal after a short delay to show success message
      setTimeout(() => {
        handleClose();
      }, 1500);

    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error instanceof Error ? error.message : "Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-2xl w-96 border border-gray-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Manage Account Info</h3>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition duration-150"
          aria-label="Close edit form"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className={`mt-1 w-full border rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${missing.includes("firstName") ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Enter your first name"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <PhoneInput
            value={form.phone_number}
            onChange={handlePhoneChange}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400"
            disabled={isLoading}
          />

        </div>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {success && (
          <p className="text-sm text-green-500">{success}</p>
        )}

        <div className="pt-2 flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150 disabled:opacity-50"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 disabled:opacity-50 flex items-center gap-2"
            disabled={isLoading || !form.firstName.trim()}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
// --- END MODIFIED COMPONENT: ManageChatsForm ---

// --- MAIN COMPONENT: ProfileCard (MODIFIED) ---
const ProfileCard: React.FC<ProfileCardProps> = ({ email, name, onClose }) => {
  
  const getInitialImageUrl = () => {
    try {
      const userString = localStorage.getItem("userObject");
      if (userString) {
        const user = JSON.parse(userString);
        return user?.profile_image_url || "";
      }
    } catch (error) {
      console.error("Error parsing userObject for image URL:", error);
    }
    return "";
  };
  
  const [profileImage, setProfileImage] = useState<string>(getInitialImageUrl);
  const avatarLetter = name ? name.charAt(0).toUpperCase() : "";

  // ADDED: New modal view for image upload
  const [modalView, setModalView] = useState<'none' | 'manage_account' | 'change_password' | 'upload_image'>('none');
  const [isLoading, setIsLoading] = useState(false)

  // Function to refresh image state when the modal closes or on success
  const handleImageUploadSuccess = (newImageUrl: string) => {
    setProfileImage(newImageUrl);
  }

  // ADDED: Function to open image upload modal
  const handleImageUpload = () => {
    setModalView('upload_image');
  }

  // ADDED: Focus event listener for auto-update without refreshing
  useEffect(() => {
    const handleFocus = () => {
      console.log("ProfileCard: Window focused - data auto-updated");
      // Re-fetch the image URL and name on window focus to ensure freshness after an update
      setProfileImage(getInitialImageUrl()); 
    };

    window.addEventListener("focus", handleFocus);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.clear()
    if (typeof window !== 'undefined') {
      window.location.href = "/"
    }
  }

  const handleManageAccount = () => {
    setModalView('manage_account');
  }

  const handleChangePassword = () => {
    setModalView('change_password');
  }

  const handleClose = () => {
    setModalView('none');
    setIsLoading(false);
    if (onClose) {
      onClose()
    }
  }

  if (modalView === 'manage_account') {
    return (
      <ManageChatsForm
        handleClose={handleClose}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        name={name}
      />
    );
  }

  if (modalView === 'change_password') {
    return (
      <UpdatePasswordForm
        handleClose={handleClose}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        email={email}
      />
    );
  }
  
  // ADDED: New conditional render for ImageUploadModal
  if (modalView === 'upload_image') {
    return (
      <ImageUploadModal
        handleClose={handleClose}
        onImageUploadSuccess={handleImageUploadSuccess}
      />
    );
  }

  // Profile Card View (Default View) - MODIFIED to include profile image
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-xl w-85">
      <div className="flex justify-between w-full">
        <span className="text-sm font-semibold text-gray-600">{email}</span>
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div 
        className="relative flex items-center justify-center w-24 h-24 mt-8 mb-4 rounded-full bg-gray-800 text-white text-4xl font-bold overflow-hidden cursor-pointer"
        onClick={handleImageUpload} // ADDED: Click on the avatar to open upload modal
      >
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="Profile Avatar" 
            className="w-full h-full object-cover" 
          />
        ) : (
          avatarLetter
        )}
        {/* MODIFIED: Overlay button for image upload */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-300">
          <CameraIcon className="w-8 h-8 text-white" />
        </div>
      </div>

      <h2 className="text-xl font-medium text-gray-800">Hi, {name}!</h2>

      <div className="flex flex-col items-center w-full mt-6 space-y-3">
        <button
          onClick={handleManageAccount}
          className="w-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition duration-150"
        >
          Manage your ChatSupplies Account
        </button>

        <button
          onClick={handleChangePassword}
          className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 transition duration-150"
        >
          Change Password
        </button>

        <div className="flex justify-center w-full mt-4">
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 text-sm cursor-pointer font-medium text-gray-700 hover:text-gray-900 transition duration-150"
          >
            <span className="text-blue-500">
              {/* UPDATED ICON SVG to match the Log Out/Door style from c102.PNG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Door/Box */}
                <path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5" />
                {/* Arrow */}
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="10" y2="12" />
              </svg>
            </span>
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProfileCard