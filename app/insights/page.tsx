import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  
  {
    id: 1,
    category: "EXPORT GUIDE",
    title: "Makhana (Fox Nuts) Grades Explained: How Importers Should Choose",
    author: "Team Shri Ram",
    date: "November 5, 2026",
    excerpt: "Learn how makhana is graded by size, what quality checks matter, and how to choose the right grade for retail, snacking or food manufacturing.",
    image: "/makhana-blog.jpg", // Make sure to add this image to your public folder
    link: "/insights/makhana-grades-explained",
  },
  
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        
        {/* Header Section */}
        <section className="bg-[#fdfbd4] py-20 text-center border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-semibold text-[#012F6A]">
              Blog
            </h1>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="flex flex-col bg-white border-[0.5px] border-slate-200 hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="flex flex-col flex-1 p-8">
                    <p className="text-xs font-semibold tracking-wider text-[#BC8521] uppercase mb-3">
                      {post.category}
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-[#012F6A] mb-4 leading-snug group-hover:text-[#BC8521] transition-colors">
                      <Link href={post.link}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-sm text-slate-500 mb-6 font-medium italic">
                      By {post.author} • {post.date}
                    </p>
                    
                    <p className="text-slate-600 mb-8 leading-relaxed font-medium flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={post.link}
                        className="inline-flex items-center text-sm font-semibold text-[#012F6A] hover:text-[#BC8521] transition-colors uppercase tracking-widest"
                      >
                        Read More <span aria-hidden="true" className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}