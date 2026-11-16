
import {
  Search,
  Home,
  Users,
  BriefcaseBusiness,
  MessageCircle,
  Bell,
  Image,
  CalendarDays,
  FileText,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Repeat2,
  Send,
  Bookmark,
  ChevronDown,
  Globe,
} from "lucide-react";
import Navbar from "./Navbar";

export default function LinkedinHome() {
  return (
    <div className="min-h-screen bg-[#F3F6F8] text-gray-900">

      {/* Main Layout */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-5 px-4 py-6 lg:grid-cols-[240px_minmax(0,1fr)_300px]">

        {/* Left Sidebar */}
        <aside className="hidden space-y-4 lg:block">

          {/* Profile Card */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="h-20 bg-gradient-to-r from-blue-100 via-sky-100 to-indigo-100"></div>

            <div className="px-4 pb-4">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Jordan Davis"
                className="-mt-9 mb-3 h-16 w-16 rounded-full border-4 border-white object-cover"
              />

              <h2 className="font-semibold text-gray-900">
                Jordan Davis
              </h2>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Frontend Developer | React | UI/UX
              </p>

              <p className="mt-3 border-b border-gray-100 pb-4 text-xs text-gray-400">
                Pune, Maharashtra, India
              </p>

              <div className="space-y-4 py-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Profile viewers</span>
                  <span className="font-semibold text-[#0A66C2]">248</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Post impressions</span>
                  <span className="font-semibold text-[#0A66C2]">1,482</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <Bookmark size={16} />
                  My saved items
                </p>
              </div>
            </div>
          </div>

          {/* Recent Groups */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h3 className="mb-4 text-sm font-semibold">Recent</h3>

            <p className="mb-4 text-sm text-gray-500">
              # React Developers
            </p>

            <p className="mb-4 text-sm text-gray-500">
              # AI & Machine Learning
            </p>

            <p className="mb-4 text-sm text-gray-500">
              # Design Community
            </p>

            <p className="cursor-pointer text-sm font-semibold text-[#0A66C2]">
              Discover more
            </p>
          </div>

        </aside>

        {/* Center Feed */}
        <section className="min-w-0 space-y-4">

          {/* Create Post */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Your profile"
                className="h-12 w-12 rounded-full object-cover"
              />

              <button className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-left text-sm text-gray-500 transition hover:bg-gray-50">
                Start a post
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
                <Image size={20} className="text-sky-600" />
                Media
              </button>

              <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
                <CalendarDays size={20} className="text-amber-600" />
                Event
              </button>

              <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
                <FileText size={20} className="text-rose-600" />
                Write article
              </button>
            </div>
          </div>

          {/* Feed Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300"></div>
            <p className="text-xs text-gray-500">
              Sort by: <span className="font-semibold text-gray-800">Top</span>
            </p>
            <ChevronDown size={14} />
          </div>

          {/* Post One */}
          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">

            <div className="p-4">
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  alt="Alex Morgan"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Alex Morgan
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Product Designer | Building digital experiences
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                    2h · <Globe size={12} />
                  </p>
                </div>

                <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
                  <MoreHorizontal size={21} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-700">
                Great products aren't built by adding more features.
                They're built by solving the right problems. Focus on
                clarity, simplicity, and user experience.
                <br /><br />
                Here's a reminder for every designer and developer:
                build for people, not just for pixels.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
              alt="Modern creative workspace"
              className="max-h-[420px] w-full object-cover"
            />

            <div className="px-4">
              <div className="flex items-center justify-between border-b border-gray-100 py-3 text-xs text-gray-500">
                <span>👍 ❤️ 128 reactions</span>
                <span>18 comments · 4 reposts</span>
              </div>

              <div className="grid grid-cols-4 gap-1 py-2">
                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <ThumbsUp size={18} />
                  <span className="text-xs font-medium">Like</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <MessageSquare size={18} />
                  <span className="text-xs font-medium">Comment</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <Repeat2 size={18} />
                  <span className="text-xs font-medium">Repost</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <Send size={18} />
                  <span className="text-xs font-medium">Send</span>
                </button>
              </div>
            </div>
          </article>

          {/* Post Two */}
          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">

            <div className="p-4">
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  alt="Sarah Chen"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Sarah Chen
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    AI Engineer | Technology Enthusiast
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                    4h · <Globe size={12} />
                  </p>
                </div>

                <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
                  <MoreHorizontal size={21} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-700">
                One thing I've learned while working with AI:
                the best solutions aren't always the most complex ones.
                <br /><br />
                Start with a real problem. Build something small.
                Learn from feedback. Then improve it.
                <br /><br />
                Progress comes from building, not just consuming content.
              </p>
            </div>

            <div className="mx-4 mb-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                A developer's mindset
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
                Learn continuously.
                <br />
                Build consistently.
                <br />
                <span className="text-[#0A66C2]">
                  Create meaningful impact.
                </span>
              </h3>

              <p className="mt-4 text-sm text-gray-600">
                Skills grow when knowledge becomes action.
              </p>
            </div>

            <div className="px-4">
              <div className="flex items-center justify-between border-b border-gray-100 py-3 text-xs text-gray-500">
                <span>👍 💡 86 reactions</span>
                <span>12 comments · 3 reposts</span>
              </div>

              <div className="grid grid-cols-4 gap-1 py-2">
                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <ThumbsUp size={18} />
                  <span className="text-xs font-medium">Like</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <MessageSquare size={18} />
                  <span className="text-xs font-medium">Comment</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <Repeat2 size={18} />
                  <span className="text-xs font-medium">Repost</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <Send size={18} />
                  <span className="text-xs font-medium">Send</span>
                </button>
              </div>
            </div>
          </article>

          {/* Post Three */}
          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=60"
                  alt="David Wilson"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    David Wilson
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Software Engineer | Open-source enthusiast
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                    6h · <Globe size={12} />
                  </p>
                </div>

                <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
                  <MoreHorizontal size={21} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-700">
                A reminder for every developer: consistent practice
                beats occasional motivation.
                <br /><br />
                Write code, read documentation, build projects, and
                share what you learn. Small improvements compound over time.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
              alt="Developers collaborating in an office"
              className="max-h-[420px] w-full object-cover"
            />

            <div className="px-4">
              <div className="flex items-center justify-between border-b border-gray-100 py-3 text-xs text-gray-500">
                <span>👍 ❤️ 214 reactions</span>
                <span>32 comments · 8 reposts</span>
              </div>

              <div className="grid grid-cols-4 gap-1 py-2">
                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <ThumbsUp size={18} />
                  <span className="text-xs font-medium">Like</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <MessageSquare size={18} />
                  <span className="text-xs font-medium">Comment</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <Repeat2 size={18} />
                  <span className="text-xs font-medium">Repost</span>
                </button>

                <button className="flex flex-col items-center gap-1 rounded-lg py-2 text-gray-500 hover:bg-gray-100 sm:flex-row sm:justify-center">
                  <Send size={18} />
                  <span className="text-xs font-medium">Send</span>
                </button>
              </div>
            </div>
          </article>

        </section>

        {/* Right Sidebar */}
        <aside className="hidden space-y-4 lg:block">

          {/* Trending News */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">
                LinkedIn News
              </h2>
              <span className="text-gray-400">ⓘ</span>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Top stories
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  AI skills reshape hiring
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  2h ago · 4,281 readers
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Startups embrace automation
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  4h ago · 2,105 readers
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  The future of product design
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  5h ago · 1,824 readers
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  New trends in software
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  6h ago · 1,542 readers
                </p>
              </div>
            </div>

            <button className="mt-5 flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[#0A66C2]">
              Show more <ChevronDown size={15} />
            </button>
          </div>

          {/* People You May Know */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h2 className="mb-4 font-semibold text-gray-900">
              People you may know
            </h2>

            <div className="mb-5 flex items-start gap-3">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Sarah Chen"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-gray-800">
                  Sarah Chen
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  AI Engineer at Tech Labs
                </p>
                <button className="mt-2 rounded-full border border-gray-500 px-4 py-1.5 text-sm font-semibold text-gray-600 hover:border-[#0A66C2] hover:text-[#0A66C2]">
                  + Follow
                </button>
              </div>
            </div>

            <div className="mb-5 flex items-start gap-3">
              <img
                src="https://i.pravatar.cc/150?img=60"
                alt="David Wilson"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-gray-800">
                  David Wilson
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Software Engineer
                </p>
                <button className="mt-2 rounded-full border border-gray-500 px-4 py-1.5 text-sm font-semibold text-gray-600 hover:border-[#0A66C2] hover:text-[#0A66C2]">
                  + Follow
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="https://i.pravatar.cc/150?img=44"
                alt="Emily Parker"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-gray-800">
                  Emily Parker
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Product Designer
                </p>
                <button className="mt-2 rounded-full border border-gray-500 px-4 py-1.5 text-sm font-semibold text-gray-600 hover:border-[#0A66C2] hover:text-[#0A66C2]">
                  + Follow
                </button>
              </div>
            </div>

            <button className="mt-5 text-sm font-semibold text-gray-500 hover:text-[#0A66C2]">
              View all recommendations →
            </button>
          </div>

          {/* Footer */}
          <footer className="px-3 py-3 text-center text-xs leading-6 text-gray-500">
            About · Accessibility · Help Center
            <br />
            Privacy & Terms · Advertising
            <br />
            Business Services · More
            <br />
            <span className="font-semibold text-[#0A66C2]">LinkedIn</span>{" "}
            Corporation © 2026
          </footer>

        </aside>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-gray-200 bg-white px-2 py-2 lg:hidden">
        <a href="#" className="flex flex-col items-center gap-1 text-gray-900">
          <Home size={21} />
          <span className="text-[10px]">Home</span>
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-gray-500">
          <Users size={21} />
          <span className="text-[10px]">Network</span>
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-gray-500">
          <BriefcaseBusiness size={21} />
          <span className="text-[10px]">Jobs</span>
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-gray-500">
          <MessageCircle size={21} />
          <span className="text-[10px]">Messaging</span>
        </a>

        <a href="#" className="flex flex-col items-center gap-1 text-gray-500">
          <Bell size={21} />
          <span className="text-[10px]">Alerts</span>
        </a>
      </nav>

    </div>
  );
}
