export const WhatiDo = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-3xl font-bold my-5">What I  Do</h1>
      </div>
      <div className="grid grid-cols-4 px-[10%] gap-5">
        {
            Services.map((item,index)=>(
                <div key={index} className="p-5 border">
                    <h1 className="text-lg font-bold">{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            ))
        }
      </div>
    </div> 
  );
};
export const WhyChooseMe = () => {
    return(
        <div className="">
            <div className="text-center">
                <h1 className="text-3xl font-bold my-5">Why Choose Me</h1>
            </div>
            <div className="grid grid-cols-4 mx-[10%] gap-5">
                {
                    qualities.map((item,index)=>(
                            <div key={index} className="border p-5">
                                <h1 className="text-lg font-bold">{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}
const Services = [
  {
    name: "Custom Web & Mobile Apps",
    description:
      "Building fully responsive and interactive web and mobile applications.",
  },
  {
    name: "UI/UX Design",
    description:
      "Designing sleek, modern user interfaces that ensure great user experiences.",
  },
  {
    name: "API Integrations & Cloud Solutions",
    description:
      "Connecting apps to services like Firebase, AWS, Stripe, and more to extend functionality.",
  },
  {
    name: "Real-Time Applications",
    description:
      "Developing real-time applications using WebSockets and other modern technologies.",
  },
  {
    name: "Tech Consultation",
    description:
      "Offering advice on tech stack selection, architecture design, and performance optimization.",
  },
];
const qualities = [
    {
      name: "Problem-Solving Mindset",
      description: "I love diving deep into problems and coming up with creative solutions that drive results."
    },
    {
      name: "End-to-End Development",
      description: "I can handle everything from the front-end to the back-end, ensuring that your project is cohesive and high-quality."
    },
    {
      name: "Attention to Detail",
      description: "Whether it's code quality, user interface, or user experience, I focus on making every detail perfect."
    },
    {
      name: "Continuous Learner",
      description: "The tech world is always evolving, and I make sure to stay updated with the latest trends and technologies."
    }
  ];