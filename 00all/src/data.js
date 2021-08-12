const sites = [
  {
    id: 1,
    name: 'react first basics tutorial 2021',
    link: 'https://react-first-basics-tutorial-2021.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60a2a06d1bc92200b9022c12/screenshot_2021-05-17-16-57-18-0000.png',
  },
  {
    id: 2,
    name: 'tours scroll viewer',
    link: 'https://tours-scroll-viewer.netlify.app/',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAAEsCAMAAAChTdc8AAABAlBMVEUYGBgfHx9ra2umpqa9vb3IyMjT09PY2NghISE3NzelpaXT09M5OTmYmJjT09PU1NSZmZkhISG/v7/AwMBQUFDNzc3Nzc1SUlLAwMDLy8ufn5+JiYmEhISnp6dsbGzIyMj////l5eXFxcWtra2ampqOjo6Hh4fy8vK+vr6SkpL29va3t7fV1dX+/v6Kioqurq7Ozs719fX9/f37+/uoqKiWlpbPz8+IiIjHx8eVlZXp6emcnJyvr6/5+fns7Ozr6+ve3t7BwcHCwsJ8fHx7e3v4+PjCwsI+Pj76+vo9PT2ysrKysrIjIyPi4uLi4uLx8fHx8fFcXFxbW1vh4eH5+fn4+PgebTuEAAAAVnRSTlOAgqLJ3+v4/4KLyveLv/n5wIPi45Xw8Zbi/////8qj7P//////////////////////////////////////+Ozr38rJo6L4yov5i8C/g+Pi8fCWleL5975u1e4AAAPbSURBVHgB7NY1ohxBDEDBXppeZub7X9IfbYcTa1SVKX5qKOQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9/mA4amrHNaPhoD8ucU2ms5pGM52XmMaLZU1ltd6EPE7bms4u4KHaH2pCx1O483SoKR2DnanNuf51ud5u10v71BG7TYlk8b/T7f7pdmmfOmJdApms6l/X+7dr+9QRq3mJY1r/ud2/3dqnrniUMHpN5lDNuETRrzXt1ffpGenmS/uZ+DQtUQzrp6Tf80/DEsWrpvYqUTQ1taZEUZMTSiihhEqoRPFOTiihhBIqCaGEEkqohIQSSiihEhJKKKGESkgooYQSKiGhhBJKqISEEkoooRISSiihhEpIKKGEEiohoYQSSqh8hApAqA/2yBo9gxiIYhdRYJnR9mLuf61Q87NbL8yUo/ep0een5wdhFMdRGPjeM74Fv4RK0oyry9LkCm7FL6HyIubu4iL/RxvyS6gy4slF5R/bjF9CVQUA1E3rdX3feW1TA0BR/fFt+CWU0gCYQV39BgOAVp8b8UuoSgOMU3/77qcRQFcb8UuoAmBeHsEyAxTb8EuoEmDtnqFuBSi34JdQeQTM3XPYzUCUb8AvoQpgXF7RZQQK934JlcTA9JpPQJw490uoFDD9a94bIHXul1AZMNgGA5C59ksoD6iVbaFqwHPsl1A+8GWfNIDv2C+hAmCwT1ogcOyXUCHg2SceEDr2S6gI6OyTDogc+yVUDPT2SQ/EW/X/sHfHRAACMBAEXVHhXxcmDuCHPQtb57MP9aNAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFqj9M6wNVn3rmgXr/eBpUXz9HAKqvH/gA1ddP5oDq60eoQPX1s26g+vqhRFB9/fRoH6h+zLcPVD+P3QeqH5zvA9W/cOgDlT9FCQIVvBk6j/7NEKiu+x+DgRp4hQdq5LkkqJF3raD2AgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoEANdJEHXwUMxQAIAMlfZCDk7b13/FupDspdTms5VBS0VkJFRWsVVNS01kBFS2sdVMSexvoAGQON1dAxTrQ1zRCy0NYKJdtOU8cGKeNJS9cMMfdJQ9cDOeNOO+8MQdsy0cq3Rmgah542UjNDV+yaqsj55/KyarqAX3twIAAAAAAgyN96kKsNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgWwklBtekcYYAAAAASUVORK5CYII=',
  },
  {
    id: 3,
    name: 'birthday reminder view',
    link: 'https://birthday-reminder-view.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60c9eab50d3b4db5b89d89b8/screenshot_2021-06-16-12-12-38-0000.png',
  },
  {
    id: 4,
    name: 'reviews viewer',
    link: 'https://reviews-viewer.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60c9f2ec8c2fb0dadad83d87/screenshot_2021-06-16-12-47-42-0000.png',
  },
  {
    id: 5,
    name: 'show more info training',
    link: 'https://show-more-info-training.netlify.app/',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAAEsCAMAAAChTdc8AAABAlBMVEUYGBgfHx9ra2umpqa9vb3IyMjT09PY2NghISE3NzelpaXT09M5OTmYmJjT09PU1NSZmZkhISG/v7/AwMBQUFDNzc3Nzc1SUlLAwMDLy8ufn5+JiYmEhISnp6dsbGzIyMj////l5eXFxcWtra2ampqOjo6Hh4fy8vK+vr6SkpL29va3t7fV1dX+/v6Kioqurq7Ozs719fX9/f37+/uoqKiWlpbPz8+IiIjHx8eVlZXp6emcnJyvr6/5+fns7Ozr6+ve3t7BwcHCwsJ8fHx7e3v4+PjCwsI+Pj76+vo9PT2ysrKysrIjIyPi4uLi4uLx8fHx8fFcXFxbW1vh4eH5+fn4+PgebTuEAAAAVnRSTlOAgqLJ3+v4/4KLyveLv/n5wIPi45Xw8Zbi/////8qj7P//////////////////////////////////////+Ozr38rJo6L4yov5i8C/g+Pi8fCWleL5975u1e4AAAPbSURBVHgB7NY1ohxBDEDBXppeZub7X9IfbYcTa1SVKX5qKOQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9/mA4amrHNaPhoD8ucU2ms5pGM52XmMaLZU1ltd6EPE7bms4u4KHaH2pCx1O483SoKR2DnanNuf51ud5u10v71BG7TYlk8b/T7f7pdmmfOmJdApms6l/X+7dr+9QRq3mJY1r/ud2/3dqnrniUMHpN5lDNuETRrzXt1ffpGenmS/uZ+DQtUQzrp6Tf80/DEsWrpvYqUTQ1taZEUZMTSiihhEqoRPFOTiihhBIqCaGEEkqohIQSSiihEhJKKKGESkgooYQSKiGhhBJKqISEEkoooRISSiihhEpIKKGEEiohoYQSSqh8hApAqA/2yBo9gxiIYhdRYJnR9mLuf61Q87NbL8yUo/ep0een5wdhFMdRGPjeM74Fv4RK0oyry9LkCm7FL6HyIubu4iL/RxvyS6gy4slF5R/bjF9CVQUA1E3rdX3feW1TA0BR/fFt+CWU0gCYQV39BgOAVp8b8UuoSgOMU3/77qcRQFcb8UuoAmBeHsEyAxTb8EuoEmDtnqFuBSi34JdQeQTM3XPYzUCUb8AvoQpgXF7RZQQK934JlcTA9JpPQJw490uoFDD9a94bIHXul1AZMNgGA5C59ksoD6iVbaFqwHPsl1A+8GWfNIDv2C+hAmCwT1ogcOyXUCHg2SceEDr2S6gI6OyTDogc+yVUDPT2SQ/EW/X/sHfHRAACMBAEXVHhXxcmDuCHPQtb57MP9aNAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFqj9M6wNVn3rmgXr/eBpUXz9HAKqvH/gA1ddP5oDq60eoQPX1s26g+vqhRFB9/fRoH6h+zLcPVD+P3QeqH5zvA9W/cOgDlT9FCQIVvBk6j/7NEKiu+x+DgRp4hQdq5LkkqJF3raD2AgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoEANdJEHXwUMxQAIAMlfZCDk7b13/FupDspdTms5VBS0VkJFRWsVVNS01kBFS2sdVMSexvoAGQON1dAxTrQ1zRCy0NYKJdtOU8cGKeNJS9cMMfdJQ9cDOeNOO+8MQdsy0cq3Rmgah542UjNDV+yaqsj55/KyarqAX3twIAAAAAAgyN96kKsNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgWwklBtekcYYAAAAASUVORK5CYII=',
  },
  {
    id: 6,
    name: 'food menu training',
    link: 'https://food-menu-training.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60dd87c1e047ffbe0d2acc38/screenshot_2021-07-01-09-15-47-0000.png',
  },
  {
    id: 7,
    name: 'tabs job exp',
    link: 'https://tabs-job-exp.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60dd9fcc17ad40de39673765/screenshot_2021-07-01-10-58-22-0000.png',
  },
  {
    id: 8,
    name: 'reviews quotes slider',
    link: 'https://reviews-quotes-slider.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60ed6ad8b4a7b40975f13535/screenshot_2021-07-13-10-28-42-0000.png',
  },
  {
    id: 9,
    name: 'my lorem ipsum generator',
    link: 'https://my-lorem-ipsum-generator.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60eef041162c134440702d54/screenshot_2021-07-14-14-10-11-0000.png',
  },
  {
    id: 10,
    name: 'color shade picker',
    link: 'https://color-shade-picker.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60eef064c1deba420a3010eb/screenshot_2021-07-14-14-10-46-0000.png',
  },
  {
    id: 11,
    name: 'todo item list',
    link: 'https://todo-item-list.netlify.app/',
    img: 'https://d33wubrfki0l68.cloudfront.net/60f0179771bb8516eaeb3326/screenshot_2021-07-15-11-10-16-0000.png',
  },
];

export default sites;
