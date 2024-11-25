import CategoryPosts from "@/components/shared/category-posts"
import FeaturedPosts from "@/components/shared/featured-posts"
import Posts from "@/components/shared/posts"
import SliderPosts from "@/components/shared/slider-posts"

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <SliderPosts />
      <FeaturedPosts />
      <CategoryPosts />
      <Posts />
    </main>
  )
}
