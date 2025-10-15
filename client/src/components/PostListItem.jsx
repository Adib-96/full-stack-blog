import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" classname="rounded-2xl object-cover" w="735"/>
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/" className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        aut laborum possimus </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis quos impedit natus aperiam libero obcaecati commodi magni ullam rem voluptatem odio eum, delectus itaque deleniti accusamus, optio facere. Aliquam?
        </p>
        <Link to="/test" className="underline text-sm">Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem