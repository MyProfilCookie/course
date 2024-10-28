import { LayoutParams } from "@/types/next"

export default async function RootLayout(props: LayoutParams<{ lang: string }>) {
    return <div>{props.children}</div>
}