<script>
	import Nav from './components/Nav.svelte';
	import Parallax from './components/Parallax.svelte';
</script>

<main>
	<header>
		<!-- <h1>Gringos Mexican Restaurant</h1> -->
		<Nav />
	</header>
	<!-- <h2>Worlds most wanted restaurant in town</h2> -->
	<Parallax />
	<section class="content">
		<h1>blaj</h1>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut perspiciatis quod molestias numquam, accusantium tempora sit vel exercitationem aperiam quisquam expedita nam eum at provident ipsa itaque ut corrupti? Esse vitae, dolorem iure quos ex sequi rem praesentium, consequatur explicabo ullam et assumenda numquam porro distinctio tempora voluptas eos non eveniet! Repellat, asperiores sequi! Ullam accusamus quasi sequi? Nisi perferendis dignissimos consequatur voluptatem dolor corrupti, quis recusandae. Dolores obcaecati cumque repellat esse cupiditate dolore voluptatem iusto, dolorem explicabo asperiores est recusandae aliquam autem. Vero voluptatem velit dolor error eligendi doloribus amet ut praesentium libero minus provident, perferendis natus nisi fugiat esse tempora laudantium! Accusamus odio porro eaque! Quasi, voluptates. Ea, libero ipsam dolorum ex doloremque voluptatem ducimus modi aliquam distinctio est sapiente illum quasi assumenda dolorem, quaerat ipsum facilis! Aspernatur harum assumenda recusandae incidunt vitae repudiandae, soluta rerum sed eveniet cumque facilis molestiae suscipit quaerat ea dolorum odio laboriosam aliquid, modi voluptas eius. Minima eaque eligendi harum delectus tempora at quia expedita! Aliquid error soluta sed impedit nostrum, eveniet repudiandae, doloremque maxime veniam, quam dignissimos. Ipsam, voluptatum mollitia laboriosam ab quia officiis est minima adipisci consequatur debitis itaque eveniet, neque ut! Distinctio placeat recusandae eos sint quam, eaque tenetur ea?</p><br><br>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut perspiciatis quod molestias numquam, accusantium tempora sit vel exercitationem aperiam quisquam expedita nam eum at provident ipsa itaque ut corrupti? Esse vitae, dolorem iure quos ex sequi rem praesentium, consequatur explicabo ullam et assumenda numquam porro distinctio tempora voluptas eos non eveniet! Repellat, asperiores sequi! Ullam accusamus quasi sequi? Nisi perferendis dignissimos consequatur voluptatem dolor corrupti, quis recusandae. Dolores obcaecati cumque repellat esse cupiditate dolore voluptatem iusto, dolorem explicabo asperiores est recusandae aliquam autem. Vero voluptatem velit dolor error eligendi doloribus amet ut praesentium libero minus provident, perferendis natus nisi fugiat esse tempora laudantium! Accusamus odio porro eaque! Quasi, voluptates. Ea, libero ipsam dolorum ex doloremque voluptatem ducimus modi aliquam distinctio est sapiente illum quasi assumenda dolorem, quaerat ipsum facilis! Aspernatur harum assumenda recusandae incidunt vitae repudiandae, soluta rerum sed eveniet cumque facilis molestiae suscipit quaerat ea dolorum odio laboriosam aliquid, modi voluptas eius. Minima eaque eligendi harum delectus tempora at quia expedita! Aliquid error soluta sed impedit nostrum, eveniet repudiandae, doloremque maxime veniam, quam dignissimos. Ipsam, voluptatum mollitia laboriosam ab quia officiis est minima adipisci consequatur debitis itaque eveniet, neque ut! Distinctio placeat recusandae eos sint quam, eaque tenetur ea?</p><br><br>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut perspiciatis quod molestias numquam, accusantium tempora sit vel exercitationem aperiam quisquam expedita nam eum at provident ipsa itaque ut corrupti? Esse vitae, dolorem iure quos ex sequi rem praesentium, consequatur explicabo ullam et assumenda numquam porro distinctio tempora voluptas eos non eveniet! Repellat, asperiores sequi! Ullam accusamus quasi sequi? Nisi perferendis dignissimos consequatur voluptatem dolor corrupti, quis recusandae. Dolores obcaecati cumque repellat esse cupiditate dolore voluptatem iusto, dolorem explicabo asperiores est recusandae aliquam autem. Vero voluptatem velit dolor error eligendi doloribus amet ut praesentium libero minus provident, perferendis natus nisi fugiat esse tempora laudantium! Accusamus odio porro eaque! Quasi, voluptates. Ea, libero ipsam dolorum ex doloremque voluptatem ducimus modi aliquam distinctio est sapiente illum quasi assumenda dolorem, quaerat ipsum facilis! Aspernatur harum assumenda recusandae incidunt vitae repudiandae, soluta rerum sed eveniet cumque facilis molestiae suscipit quaerat ea dolorum odio laboriosam aliquid, modi voluptas eius. Minima eaque eligendi harum delectus tempora at quia expedita! Aliquid error soluta sed impedit nostrum, eveniet repudiandae, doloremque maxime veniam, quam dignissimos. Ipsam, voluptatum mollitia laboriosam ab quia officiis est minima adipisci consequatur debitis itaque eveniet, neque ut! Distinctio placeat recusandae eos sint quam, eaque tenetur ea?</p>
	</section>
</main>

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

		* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
main {
  overflow-x: hidden;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #F2703D;
  margin: 0;
  padding: 0;
}

.content {
  position: relative;
  padding: 50px;
  background-color: var(--darkest);
  color: white;
}
.content h1 {
  color: var(--light-tan);
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 3rem;
}
.content p {
  color: var(--light-tan);
  font-size: 1rem;
  font-weight: 200;
}
</style>