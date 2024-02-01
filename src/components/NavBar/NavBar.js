import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <div className='hero is-flex-direction-row'>
                <h3>Quijano's Ecommerce</h3>
                <div>
                    <button>Celulares</button>
                    <button>Tablets</button>
                    <button>Notebooks</button>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar