import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Section } from 'components/Section';
import { Menu } from 'components/Menu';
import { Education } from 'components/Education';

function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="main">
        <div id="education">
          <h1>Education</h1>
          <Education logo="vut-fit.png" school="VUT" start={2020} end={2024} program="Bachelor's program" link="https://www.fit.vut.cz/.en"/>
        </div>

        <div id="experience"><Section heading='Experience'/></div>

        <div id="about-me"><Section heading='About Me'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada ut magna ac congue. Vivamus eget odio est. Proin pulvinar, diam ac ornare vehicula, erat lorem tristique dolor, id ultrices nibh arcu pellentesque nisi. Quisque libero nunc, tincidunt vitae efficitur in, tincidunt id tellus. Donec pellentesque odio enim, in congue nibh feugiat a. Sed commodo, neque quis eleifend porta, justo lacus bibendum purus, eu sagittis purus dui quis nibh. Curabitur imperdiet hendrerit malesuada. Sed tortor orci, viverra at nulla eget, congue pharetra velit. Fusce vitae ultrices elit, in finibus augue. Nunc mattis ac mi eu ultrices. Sed efficitur sollicitudin nibh vitae suscipit. Nullam dignissim eleifend leo at dapibus. Nullam aliquam, nunc ut ultrices tristique, tellus massa condimentum ante, eget cursus libero purus eu diam. Praesent maximus nisl ac dolor feugiat, at tempor nibh sollicitudin. Nullam in justo laoreet, convallis dui et, commodo sapien. Maecenas consectetur mattis lectus quis facilisis.

          Nam vehicula vehicula ex, quis sagittis felis auctor nec. Morbi venenatis interdum tincidunt. Nam commodo at dui eget fringilla. Nunc non sapien facilisis lectus dignissim fermentum. Curabitur vitae diam sed lorem imperdiet imperdiet eget a nisi. Curabitur maximus dolor eu ultricies aliquet. Fusce luctus mattis rhoncus. Morbi leo nibh, tincidunt a odio id, feugiat sagittis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Mauris pretium a odio quis volutpat. Aliquam tempus sagittis lorem non aliquet. Duis maximus orci et dolor pellentesque, fermentum ornare libero pharetra.

          Sed a libero malesuada, tristique lectus a, porttitor ligula. Nam semper aliquam rhoncus. Aliquam vulputate ante vitae orci vestibulum, vitae bibendum nisl efficitur. Sed erat elit, egestas nec dui id, bibendum pellentesque ante. Aenean mi enim, placerat non tortor vel, aliquam malesuada magna. Sed viverra dolor tortor, sit amet ultrices nulla commodo non. Sed cursus turpis quis tortor malesuada commodo.

          Praesent eu varius quam. Nulla arcu massa, vehicula eget porta nec, pretium at libero. Phasellus semper, mauris ac accumsan sollicitudin, enim quam venenatis dolor, vitae aliquet neque lacus eget felis. Sed ex ipsum, lobortis dapibus dapibus non, molestie vel justo. Sed viverra dolor eu diam dignissim, nec ultricies sem pellentesque. Praesent blandit auctor arcu. Nulla scelerisque enim vel purus iaculis, at efficitur arcu posuere. Fusce condimentum odio malesuada nisi tempus condimentum. In sit amet porttitor nibh. Nullam nec sapien euismod, semper lorem et, commodo lacus. Phasellus gravida pretium congue. Ut sodales eleifend quam vel sollicitudin. Nam et lectus turpis. Aenean vulputate tristique felis vel porta. Curabitur gravida lorem porttitor quam blandit, at ultrices neque porta.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies blandit molestie. Sed mattis eu felis ut venenatis. Fusce aliquam sapien sed vulputate sodales. Proin non turpis sollicitudin, elementum velit eu, imperdiet ligula. Sed congue elementum tristique. Duis accumsan urna at augue aliquam, scelerisque lobortis magna venenatis. Integer vitae mattis nunc. Quisque nec euismod orci, in accumsan lacus. Proin ut efficitur nibh, sed ultrices eros. Phasellus bibendum dolor nulla, venenatis pharetra neque suscipit sit amet. Cras risus ex, pharetra vitae feugiat a, pulvinar id est. Vivamus non ligula sit amet arcu ornare convallis.
        </div>

        <div id="contact"><Section heading='Contact'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada ut magna ac congue. Vivamus eget odio est. Proin pulvinar, diam ac ornare vehicula, erat lorem tristique dolor, id ultrices nibh arcu pellentesque nisi. Quisque libero nunc, tincidunt vitae efficitur in, tincidunt id tellus. Donec pellentesque odio enim, in congue nibh feugiat a. Sed commodo, neque quis eleifend porta, justo lacus bibendum purus, eu sagittis purus dui quis nibh. Curabitur imperdiet hendrerit malesuada. Sed tortor orci, viverra at nulla eget, congue pharetra velit. Fusce vitae ultrices elit, in finibus augue. Nunc mattis ac mi eu ultrices. Sed efficitur sollicitudin nibh vitae suscipit. Nullam dignissim eleifend leo at dapibus. Nullam aliquam, nunc ut ultrices tristique, tellus massa condimentum ante, eget cursus libero purus eu diam. Praesent maximus nisl ac dolor feugiat, at tempor nibh sollicitudin. Nullam in justo laoreet, convallis dui et, commodo sapien. Maecenas consectetur mattis lectus quis facilisis.

          Nam vehicula vehicula ex, quis sagittis felis auctor nec. Morbi venenatis interdum tincidunt. Nam commodo at dui eget fringilla. Nunc non sapien facilisis lectus dignissim fermentum. Curabitur vitae diam sed lorem imperdiet imperdiet eget a nisi. Curabitur maximus dolor eu ultricies aliquet. Fusce luctus mattis rhoncus. Morbi leo nibh, tincidunt a odio id, feugiat sagittis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Mauris pretium a odio quis volutpat. Aliquam tempus sagittis lorem non aliquet. Duis maximus orci et dolor pellentesque, fermentum ornare libero pharetra.

          Sed a libero malesuada, tristique lectus a, porttitor ligula. Nam semper aliquam rhoncus. Aliquam vulputate ante vitae orci vestibulum, vitae bibendum nisl efficitur. Sed erat elit, egestas nec dui id, bibendum pellentesque ante. Aenean mi enim, placerat non tortor vel, aliquam malesuada magna. Sed viverra dolor tortor, sit amet ultrices nulla commodo non. Sed cursus turpis quis tortor malesuada commodo.

          Praesent eu varius quam. Nulla arcu massa, vehicula eget porta nec, pretium at libero. Phasellus semper, mauris ac accumsan sollicitudin, enim quam venenatis dolor, vitae aliquet neque lacus eget felis. Sed ex ipsum, lobortis dapibus dapibus non, molestie vel justo. Sed viverra dolor eu diam dignissim, nec ultricies sem pellentesque. Praesent blandit auctor arcu. Nulla scelerisque enim vel purus iaculis, at efficitur arcu posuere. Fusce condimentum odio malesuada nisi tempus condimentum. In sit amet porttitor nibh. Nullam nec sapien euismod, semper lorem et, commodo lacus. Phasellus gravida pretium congue. Ut sodales eleifend quam vel sollicitudin. Nam et lectus turpis. Aenean vulputate tristique felis vel porta. Curabitur gravida lorem porttitor quam blandit, at ultrices neque porta.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies blandit molestie. Sed mattis eu felis ut venenatis. Fusce aliquam sapien sed vulputate sodales. Proin non turpis sollicitudin, elementum velit eu, imperdiet ligula. Sed congue elementum tristique. Duis accumsan urna at augue aliquam, scelerisque lobortis magna venenatis. Integer vitae mattis nunc. Quisque nec euismod orci, in accumsan lacus. Proin ut efficitur nibh, sed ultrices eros. Phasellus bibendum dolor nulla, venenatis pharetra neque suscipit sit amet. Cras risus ex, pharetra vitae feugiat a, pulvinar id est. Vivamus non ligula sit amet arcu ornare convallis.
        </div>

      </div>
    </div>
  );
}

export default App;
