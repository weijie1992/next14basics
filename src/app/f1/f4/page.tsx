import Link from 'next/link'

export default function Ff() {
    return <h1>F4 page
        <div>
            <Link href="/f1/f3">F3</Link>
            <br />
            <Link href="/about">about page</Link>
        </div>
    </h1>
}
