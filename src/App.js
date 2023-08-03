import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import { Movie } from './Pages/Movie';
import { Notfound } from './Pages/Notfound';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:movieId' component={Movie} />
          <Route exact path='' component={Notfound} />
        </Switch>
      </Router>

      {/* <Grid header={"Porpular Movies"}>

        <Thumb image={"https://images.thedirect.com/media/article_full/transformers_5ujgNGv.jpg"} movieId={"1"} clickable={'clickable'} />
        <Thumb image={"https://images.fanpop.com/images/image_uploads/Barbie-Movie-Wallpaper-barbie-movies-407791_500_375.jpg"} movieId={"1"} clickable={'clickable'} />
        <Thumb image={"https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg"} movieId={"2"} clickable={'clickable'} />
        <Thumb image={"https://hips.hearstapps.com/hmg-prod/images/despicable-me-1533222068.jpg?resize=480:*"} movieId={"3"} clickable={'clickable'} />
        <Thumb image={"https://www.dvdfab.cn/upload/resource/youtube-kids-movies-j7Al.jpeg"} movieId={"4"} clickable={'clickable'} />
        <Thumb image={"https://upload.wikimedia.org/wikipedia/en/7/7c/White_Snake_2%2C_The_Tribulation_of_the_Green_Snake_2021_Movie_Poster.jpg"} movieId={"5"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhf2IBM21850lavppNyUOZdqpTPiY7RbhbUadhg1njtlnFs3AP"} movieId={"6"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ45M9aZzUg-7Qy7_Moi22xkmvYJydgPNHXz4ZofUjemFi1kPR"} movieId={"7"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSTwknaFkY1S7fWnEWPdgenTJbE64fzjjXVjPrrpkPvVnX_gOi"} movieId={"8"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhosejB1KJ_WGNlnhzLFtbdMN_YXKfkMXG2Hn_dGbV0YOrg63L"} movieId={"9"} clickable={'clickable'} />
        <Thumb image={"https://m.media-amazon.com/images/M/MV5BYzM0YjcwM2QtN2FmMC00YjU2LWI3YzctNDZhOTJiN2VhYjQxXkEyXkFqcGdeQXVyMTU0NjA4Njk3._V1_.jpg"} movieId={"10"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnSktMCVuYMt4zkpJxrK8YKQPBjFkzXxbWAZWcu-ScpScmUuuj"} movieId={"11"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0JQ0sW5t0AtEorPkHLc1i8Ggt93ENf3ycsXZPVk9jdKQNNpR"} movieId={"12"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWh_MNKB_9YWU0Vjo9pzsIwcxsXKwbyRvYcATW71uzz21XAdY"} movieId={"13"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAms2V1SOGzxkZJwU7DI7x3DLA9BByXWq2bniWsTF_tqp0pc38"} movieId={"14"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrxmE5-puxS_q5929w1A4frxAM5fusNqjP0CyJIvqnUO53fs9k"} movieId={"15"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTqUxfzVF-XFGltP_5vIp6K6dCJv3cPz5SJ7wK9vhtcpSKvmXCr"} movieId={"16"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTeczmt4HoRcZKMoI-rHcfqCwMkBKP3kMUhAPV95RW0e_ZYZ9N0"} movieId={"17"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoXtgMlVpiOtLWBSauHiGoZfQsMRVU3l4Ep2hJ8KDUEYqqFwMu"} movieId={"18"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBvtLbdotFhbnsspMrqg9spxq8Y_a9y1bIaXpgqBYLRTHtTvl"} movieId={"19"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmaBMF_opANOit4gM2anwaMklRbyNRis2IMFgj5K8oKCZIen0O"} movieId={"20"} clickable={'clickable'} />
        <Thumb image={"https://images.fanpop.com/images/image_uploads/Barbie-Movie-Wallpaper-barbie-movies-407791_500_375.jpg"} movieId={"21"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52exShfJpweymIlzjlLHAH_wgSiZILMZCHz7Nk08fYe-sbKGm"} movieId={"22"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobbeClreSlgJ5Ekk-dIQ_m8AXE7Ec6YfTcdeRIwQv83fCjeDw"} movieId={"23"} clickable={'clickable'} />
        <Thumb image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobbeClreSlgJ5Ekk-dIQ_m8AXE7Ec6YfTcdeRIwQv83fCjeDw"} movieId={"24"} clickable={'clickable'} />
      </Grid> */}

      <GlobalStyle />
    </>
  )

}

export default App;
