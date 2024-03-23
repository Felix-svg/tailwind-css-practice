function App() {
  return(
    <div>
        <div>
            <nav>
                <div>
                    <h1 class="text-xl font-bold">
                        <a href="/">Food Ninja</a>
                    </h1>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <span>Home</span>
                        </a>
                    </li>
                    <li class="text-gray-700">
                        <a href="#">
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <main>
            <div>
                <a href="#">Login</a>
                <a href="#">Sign up</a>
            </div>
            <header>
                <h2>Recipes</h2>
                <h3>For Ninjas</h3>
            </header>
            <div>
                <h4>Latest Recipes</h4>
                <div>
                    <div>
                        <img src="/img/stew.jpg" alt="stew" />
                        <div>
                            <span>5 Bean Chilli Stew</span>
                            <span>Recipe by Mario</span>
                        </div>
                    </div>
                </div>
                <h4>Most Popular Recipes</h4>
                <div>
                    {/* cards go heare */}
                </div>
                <div>
                    <div>Load more</div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default App;
