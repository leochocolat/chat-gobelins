<template>
  <div class="stickers-container">
    <ul>
      <li class="message-list__item sticker class1" >
          <p class="sicker__content">Stickers 1</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class2" >
          <p class="sticker__content">Stickers 2</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class3" >
          <p class="sticker__content">Stickers 3</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class4" >
          <p class="sticker__content">Stickers 4</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class5" >
          <p class="sticker__content">Stickers 5</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class6" >
          <p class="sticker__content">Stickers 6</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class7" >
          <p class="sticker__content">Stickers 7</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class8" >
          <p class="sticker__content">Stickers 8</p>
          <span class="sticker__username">@leo</span>
      </li>
      <li class="message-list__item sticker class9" >
          <p class="sticker__content">Stickers 9</p>
          <span class="sticker__username">@leo</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

body {
  // overflow-y: scroll;
}

.stickers-container {
  margin-top: 100px;

  .sticker {
    position: relative;
    left: 0;

    margin: 10px 10px;
  }
}

.class1 {
  font-family: 'Gotham';
  font-style: italic;
  text-transform: inherit;
  background-color: #9D0B0E;
  color: white;
  border: white 4px solid;

  .sticker__content {
    padding: 30px 30px;
    margin: 0 20px;
  }

  .sticker__username {
    position: absolute;
    left: 30px;
    bottom: 12px;
    font-size: 14px;
    font-weight: 100;
  }
}

.class2 {
  color: #0D00FF;
  text-transform: uppercase;

  font-size: 100px; 
  font-family: 'Pilat Extended';
  font-weight: 900;
  font-style: normal;

  overflow: hidden;

  .sticker__content {
    padding: 2px 30px;
    line-height: .8em;
    margin: 0;
    margin-left: 50px;
    margin-bottom: 15px;
    white-space: nowrap;
  }

  .sticker__username {
    position: absolute;
    left: 23px;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);

    font-size: 10px;
    text-transform: inherit;
  }

}


.class3 {
  border-color: transparent;
  background-color: black;
  color: red; 
  font-size: 50px;
  border-radius: 7px;

  .sticker__content {
    display: block;
    margin: 8px 10px;
    padding: 45px 50px; 
    height: 100%;
    
    border: red 3px solid;
  }

  .sticker__username {
    position: absolute;
    left: 30px;
    bottom: 25px;
  }

}

.class4 {
  color: #317E60;
  border: #317E60 5px solid;
  font-family: 'Monarch';
  text-transform: uppercase;

  .sticker__content {
    margin: 30px 50px; 
    -webkit-text-stroke: 1px #317E60;
  }

  .sticker__username {
    position: absolute;
    left: 30px;
    bottom: 15px;

    font-size: 20px;
    text-transform: lowercase;
  }
}

.class5 {
  font-family: 'Airstrike';

  .sticker__content {
    margin: 0 50px;
    margin-bottom: 20px;
  }
  .sticker__username {
    position: absolute;
    bottom: 10px;
    left: 0;

    width: 100%;

    text-align: center;
  }
}

.class6 {
  background-color: black;
  color: #D21E1E;
  font-family: 'Pilat Extended';
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;

  padding-left: 60px;
  padding-right: 60px;

  &:before {
    content: '';

    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;

    margin: auto;

    width: 1px;
    height: 75%;

    background-color: #D21E1E;
  }

  .sticker__content {
    margin-top: 10px;
    line-height: 1;
    margin: 0;
  }

  .sticker__username {
    position: relative;
    left: 0;

    display: block;
    margin-bottom: 10px;

    line-height: 1;
    font-weight: 100;
    font-size: 70px;
  }
}

.class7 {
  font-family: Arial, Helvetica, sans-serif;
  border: 0;
  background: #00EBFD;
  color: black;
  font-size: 50px;

  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  .sticker__content {
    margin: 0;
    margin-right: 30px; 
    line-height: 1em;
  }
  .sticker__username {
    position: relative;
    bottom: 0;
    margin: 0;
    line-height: 1em;
    font-size: 50px;
    margin-right: 60px;

    &:after {
      content: ':'
    }
  }
}

.class8 {
  color: black;
  border: black 2px dashed;
  padding: 30px 50px;

  .sticker__content {
    margin: 0;
  }
}

.class9 {
  color: black;
  background: #FF4900;
  font-family: '.';
  padding: 0 50px;

  .sticker__content {
    margin: 40px 0;
    -webkit-text-stroke: black 1px;
  }
  .sticker__username {
    -webkit-text-stroke: black 1px;
  }
}

.class10 {
  color: #01FE6F;
  background: #FF6281;
  font-family: 'GoboldBold';
  padding: 0 50px;

  border-color: #01FE6F;

  .sticker__content {
    margin: 40px 0;
    -webkit-text-stroke: black 1px;
  }
  .sticker__username {
    color: black
  }
}

</style>