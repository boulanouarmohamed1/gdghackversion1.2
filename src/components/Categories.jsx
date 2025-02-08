export default function Categories() {
    return (
      <div className="min-h-screen bg-black text-white py-20 px-10">
        <h1 className="text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-gray-600 to-white text-transparent bg-clip-text">
          Explore <span className="text-[#00E0FF]">Categories</span>
        </h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-14 gap-x-10 max-w-6xl mx-auto">
          {[
            { title: "Design and Creative", count: 4 },
            { title: "AI Services", count: 5 },
            { title: "Sales and Marketing", count: 6 },
            { title: "Development and IT", count: 9 },
            { title: "Front-End Devlopement", count: 20 },
            { title: "Back-End Devlopement", count: 9 },
          ].map((category, index) => (
            <div
              key={index}
              className="
                h-[200px] w-full max-w-[400px] rounded-2xl mx-auto 
                bg-gradient-to-br from-[#1f2937] via-[#2e3d52] to-[#3a475e] 
                flex flex-col justify-center items-center 
                transform hover:scale-105 duration-300 transition hover:shadow-[0_0_30px_#00E0FF]
              "
            >
              <h1 className="text-3xl font-semibold text-white mb-2">{category.title}</h1>
              <p className="text-[#8B8C62]">
                <span className="font-bold">{category.count}</span> projects
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  