export interface TestimonialInterface {
  id: number
  customer: string
  testimony: string
  stars: number
  clinic: string
}
export interface TestimonialsInterface {
  testimonials: TestimonialInterface[]
}
