/* props는 무엇이든 받아올 수 있다 jsx 그 자체라도... */
const Container = ( {children} ) => {
    return (
        <div style={{margin:20, padding:20, border: '2px solid #000' }}>
            {children}
        </div>
    )
}

export default Container;