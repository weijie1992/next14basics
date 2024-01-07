export default function ProductDetailsLayout({
    children
}: {
    children: React.ReactNode
    }) {
    function getRandomInt(count: number) {
        return Math.floor(Math.random() * count)
    }
    const random = getRandomInt(2)
    console.log("🚀 ~ file: page.tsx:7 ~ Home ~ random:", random)
    if (random === 1) {
        console.log("🚀 ~ file: page.tsx:8 ~ Home ~ random:", random)
        throw new Error('Error loading product')
    }
    return (
        <>{children}
            <h2>Features products</h2>
        
        </>
    )
}
