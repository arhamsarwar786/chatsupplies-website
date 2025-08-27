import GenericPage from "../../Components/GenericPage.";
import { pageData } from "../pageData";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  const data = pageData[params.slug];

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-500">
        Page Not Found
      </div>
    );
  }

  return <GenericPage {...data} />;
}
