<script>

</script>

<nav>
    <label for="menu-toggle" class="menu-toggle">Menu</label>
    <input type="checkbox" name="menu-toggle" id="menu-toggle">
    <ul class="main-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/menu">Menu</a></li>
    </ul>
</nav>

<style>
   :root {
  --light-tan: #FBDEBF;
  --light-org: #F9C27B;
  --med-org: #F7AF5A;
  --peach: #F4955D;
  --orange: #F26A39;
  --burnt: #D05138;
  --dark-red: #903B37;
  --darkest: #581C17;
}

   
.main-menu {
  display: none;
  list-style: none;
  margin: 10px 0;
  
}
.main-menu > li {
  padding: 8px 15px;
  margin: 5px 0;
  transition: 0.5s;
  border-radius: 50px;

}
.main-menu > li:hover {
  /* border-bottom: 2px solid var(--burnt); */
  background-color: var(--burnt);
  /* transition: 0.5s; */
}
.main-menu li a {
  text-decoration: none;
  color: white;
}

#menu-toggle {
  display: none;
}

#menu-toggle:checked + .main-menu {
  display: block;
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
}

@media (min-width: 640px) {
  .menu-toggle {
      display: none;
  }
  .main-menu {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .main-menu li {
      list-style: none;
      margin: 0 1rem;
      font-size: 1.2rem;
  }
  .main-menu li a {
      color: white;
  }
}
</style>