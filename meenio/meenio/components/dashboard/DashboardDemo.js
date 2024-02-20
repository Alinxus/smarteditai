/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LbGICTqb6VX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export default function DashboardDemo() {
  return (
    <div key="1" className="flex min-h-screen">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4">
            <Package2Icon className="h-6 w-6" />
            <span className="ml-2 font-semibold">Acme Inc</span>
          </div>
          <div className="flex-1 overflow-auto">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <SearchIcon className='w-4 h-4 bg-rounded' />
                SEO
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <PackageIcon className="h-4 w-4" />
                Products (Coming Soon)
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Customers (Coming Soon)
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics (Coming Soon)
              </Link>
            </nav>
          </div>
          <div className="flex h-14 items-center border-t px-4">
            <Button className="rounded-full w-8 h-8 ml-auto" size="icon" variant="ghost">
              <LogOutIcon className="w-4 h-4" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col border-t border-gray-200 dark:border-gray-800">
        <header className="flex h-14 items-center gap-4 border-b px-4 lg:hidden">
          <Button className="rounded-md w-8 h-8" size="icon" variant="outline">
            <ChevronLeftIcon className="w-4 h-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <Package2Icon className="h-6 w-6" />
          <Button className="rounded-md w-8 h-8 ml-auto" size="icon" variant="outline">
            <SearchIcon className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </Button>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <div className="container grid gap-4 md:gap-8 lg:gap-10">
            <h1 className="text-2xl font-semibold">Marketing Strategy</h1>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Develop your marketing strategy here to boost sales and engagement.
            </p>
            <div className="grid gap-4 md:gap-8 lg:gap-10">
              <div className="grid gap-4 md:gap-8 lg:gap-10">
                <Label htmlFor="strategy">Marketing Strategy</Label>
                <Textarea id="strategy" placeholder="Enter your marketing strategy..." />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Craft a compelling marketing plan to reach your target audience effectively.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8 lg:gap-10">
                <Label htmlFor="goals">Marketing Goals</Label>
                <Textarea id="goals" placeholder="Define your marketing goals..." />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Set clear and achievable marketing objectives to drive business growth.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8 lg:gap-10">
                <Label htmlFor="budget">Marketing Budget</Label>
                <Input id="budget" placeholder="Enter your marketing budget..." type="number" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Allocate resources effectively to maximize your marketing efforts.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8 lg:gap-10">
              <Label htmlFor="ai-input">AI-Generated Input</Label>
              <Input id="ai-input" placeholder="Request your AI-generated marketing strategy..." />
              <Button>Request Marketing Strategy</Button>
            </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}





function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
