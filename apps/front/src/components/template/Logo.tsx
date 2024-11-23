import { Righteous } from "next/font/google"
import Link from "next/link"
import Image from "next/image"

const font = Righteous({
    subsets: ["latin"],
    weight: "400"
})

export default function Logo() {
    return (
        <Link href="/" className="{`flex items-center gap-2 ${font.className}`}">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <h1 className="flex flex-col items-center text-center text-lg leading-5">
                <div>SPOR<span className="text-blue-500">T</span></div>
                <div>VALLO</div>
            </h1>
        </Link>
    )
}