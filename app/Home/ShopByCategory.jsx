import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faHeadset,
  faChartLine,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons';

const categoriesData = [
  {
    icon: faRobot,
    title: 'AI Chatbots',
    description: 'Smart automated chat solutions',
    bgColor: 'bg-[#e0f2fe] text-[#2196f3]',
    iconColor: 'text-[#2196f3]',
  },
  {
    icon: faHeadset,
    title: 'Live Support',
    description: 'Real-time customer support tools',
    bgColor: 'bg-[#e8f5e9] text-[#4caf50]',
    iconColor: 'text-[#4caf50]',
  },
  {
    icon: faChartLine,
    title: 'Analytics',
    description: 'Performance tracking & insights',
    bgColor: 'bg-[#ede7f6] text-[#673ab7]',
    iconColor: 'text-[#673ab7]',
  },
  {
    icon: faPuzzlePiece,
    title: 'Integrations',
    description: 'Connect with your favorite tools',
    bgColor: 'bg-[#fff3e0] text-[#ff9800]',
    iconColor: 'text-[#ff9800]',
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 bg-[#f8f9fa] font-['Inter']">
      <div className="max-w-[1230px] mx-auto px-4 text-center">
        <h2 className="text-[2.3rem] font-bold text-[#1f2937] mb-3">Shop by Category</h2>
        <p className="text-[1.3rem] text-[#4b5563] mb-12">Find the perfect solution for your business needs</p>

        <div
          className="
            grid gap-4
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="
                bg-white rounded-[12px] p-8 shadow-[0_4px_15px_rgba(0,0,0,0.08)]
                flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]
              "
            >
              <div
                className={`w-16 h-16 rounded-full flex justify-center items-center mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] ${category.bgColor}`}
              >
                <FontAwesomeIcon
                  icon={category.icon}
                  size="lg"
                  className={`text-2xl ${category.iconColor}`}
                />
              </div>
              <h3 className="text-[1.3rem] font-semibold text-[#1f2937] mb-3">{category.title}</h3>
              <p className="text-[0.95rem] text-[#6b7280] leading-[1.5]">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
