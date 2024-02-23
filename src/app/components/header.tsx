import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <strong><h3>itProger</h3></strong>
            <nav>
                <div className='links_header'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </header>
    );
}