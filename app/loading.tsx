export default function loading() {
    return (
        <div className="py-20 w-fit mx-auto animate-spin">
            <div className="conic-gradient h-12 w-12 lg:h-16 lg:w-16 rounded-full grid place-content-center">
                <div className="bg-light-bg dark:bg-dark-bg h-8 w-8 lg:h-12 lg:w-12 rounded-full"></div>
            </div>
        </div>
    )
}