import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="page-header">
          <div className="left-column">
              <div className="nav-icon">
                  <i className="fas fa-bolt"></i>
              </div>
          </div>

          <div className="center-column">
              <div className="hp-logo"> 
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" alt="Harry Potter Title" />
              </div>

              <div className="nav-links-wrapper">
                  <div className="nav-link">
                      <a href="#">Gryffindor</a>
                  </div>

                  <div className="nav-link">
                      <a href="#">Ravenclaw</a>
                  </div>

                  <div className="nav-link">
                      <a href="#">Hogwarts</a> 
                  </div>
                
                  <div className="nav-link">
                      <a href="#">Hufflepuff</a>
                  </div>

                  <div className="nav-link">
                      <a href="#">Slytherin</a>
                  </div>
              </div>
          </div>


          <div className="right-column">
              <div className="nav-icon">
                  <i className="fas fa-hat-wizard"></i>
              </div>
          </div>
        </div>    

        <div className="page-content">
          <div className="content-columns">
            <div className="content-wrapper">
              <div className="page-content-header">
                <h1>
                  Welcome to the Wizarding World
                </h1>
              
                <img src="https://images.pottermore.com/bxd3o8b291gf/2KCa2Pzacw8iKWCAcyKaea/b6a0c4549da069688c1e5b97100915d6/wand-black-quite_long-ball_handle.png?w=1200"></img>
              </div>

              <p>
                Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. 
                  <br />
                  <br />
                Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. 
                  <br />
                  <br />
                Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. 
                  <br />
                  <br />
                Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
                  <br />
                  <br />         
                Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.
              </p>
            </div>
                
            <div className="page-content-grid">
              <div className="grid-wrapper">
                <div className="grid-quote">
                  <p>"The wand chooses</p>
                  <h3>The wizard, Mr. Potter...</h3>
                  <p>That much has always been clear to those of us who study Wandlore" - Ollivander</p>
                </div>
                
                <div className="grid-image">
                  <img src="https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/4d02da1d868b4e09abf1288f5cbd0e81_Large.png"></img>
                </div>
              </div>

              <div className="page-content-closer">
                <h2>~ Have a Magical Evening ~</h2>
              </div>
            </div>
          </div>
        </div>
          
        <div className="feature-section">
          <div className="feature-section-bg">
            <div className="feature-images">
              <img src="https://timedotcom.files.wordpress.com/2016/07/harry-potter1.jpg?quality=85" alt="image"></img>
              <img src="https://www.narcity.com/u/2018/11/01/7fb88a9188d3fe2dd1a4f19c7f4f010af2a246a5.png_1200x630.png" alt="image"></img>
              <img src="https://pmcvariety.files.wordpress.com/2016/10/harry-potter-and-the-sorcerers-stone.jpg?w=1000&h=563&crop=1" alt="image"></img>
            </div>
          </div>
        </div>

                
        <div className="footer">
          <div className="nav-links-wrapper">
            <div className="footer-logo">
                <img src="https://i.pinimg.com/originals/2d/0b/32/2d0b32de425b8b06be204f148d146849.png" alt="footerlogo" />
            </div>

            <div className="nav-links">
              <div className="nav-link">
                <a href="#">Gryffindor</a>
              </div>

              <div className="nav-link">
                <a href="#">Slytherin</a>
              </div>

              <div className="nav-link">
                <a href="#">Ravenclaw</a>
              </div>

              <div className="nav-link">
                <a href="#">Hufflepuff</a>
              </div>
            </div>
          
            <div className="nav-links">
              <div className="nav-link">
                <a href="#">Hogsmeade</a>
              </div>
            
              <div className="nav-link">
                <a href="#">Hogwarts</a>
              </div>
            </div>

            <div className="footer-closer">
              <div className="footer-icon">
                <i className="fas fa-hat-wizard"></i>
              </div>
              
              <p>
                &copy; AJune Industries 2018 &nabla; All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
