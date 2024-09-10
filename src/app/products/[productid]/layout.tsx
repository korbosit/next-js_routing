export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <h2>Features Product</h2>
            {/* {Carousel here} */}
        </>
    );
}
