import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return (
    <div className="w-full h-[100vh] bg-gray-900" >
      <div className="w-[1200px] mx-auto py-10">
        {children}
      </div>
    </div>
  )
}