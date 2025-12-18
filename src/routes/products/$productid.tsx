import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productid')({
  component: RouteComponent,
})

function RouteComponent(props) {
    const { productid } = Route.useParams()
    
  return <div>
    <h1>Product Details {productid}</h1>
  </div>
}
