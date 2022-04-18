function Ninja() {
  let skillLevel;

  this.getSkillLevel = () => {
    console.log('getter');
    return skillLevel;
  };

  this.setSkillLevel = (value) => {
    console.log('setter');
    skillLevel = value;
  };
}

const ninja = new Ninja();
ninja.setSkillLevel(100);
if (ninja.getSkillLevel() === 100) console.log('level is 100');
