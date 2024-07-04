import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { Page } from './components';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Page>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
          imperdiet nulla malesuada pellentesque elit eget gravida. Ullamcorper
          a lacus vestibulum sed arcu. Risus nec feugiat in fermentum posuere
          urna nec tincidunt. Vitae semper quis lectus nulla at volutpat diam.
          Amet risus nullam eget felis eget. Ipsum dolor sit amet consectetur
          adipiscing elit duis. Adipiscing enim eu turpis egestas pretium. Est
          pellentesque elit ullamcorper dignissim cras tincidunt lobortis
          feugiat vivamus. Habitasse platea dictumst vestibulum rhoncus est
          pellentesque elit. Morbi tristique senectus et netus et malesuada
          fames ac turpis. Quis commodo odio aenean sed adipiscing. Amet
          consectetur adipiscing elit ut aliquam purus sit amet. Elit duis
          tristique sollicitudin nibh sit. Diam volutpat commodo sed egestas
          egestas fringilla phasellus faucibus. Nunc vel risus commodo viverra
          maecenas accumsan lacus vel. Commodo quis imperdiet massa tincidunt
          nunc pulvinar sapien et ligula. Nunc sed id semper risus in. Egestas
          quis ipsum suspendisse ultrices gravida dictum fusce.
        </p>
        <br />
        <p>
          Blandit libero volutpat sed cras ornare arcu dui vivamus. Facilisi
          nullam vehicula ipsum a arcu. Placerat orci nulla pellentesque
          dignissim. Scelerisque eu ultrices vitae auctor eu augue ut lectus.
          Tincidunt augue interdum velit euismod in pellentesque massa placerat.
          Amet tellus cras adipiscing enim eu turpis. Facilisis mauris sit amet
          massa vitae. Orci a scelerisque purus semper eget. Sed velit dignissim
          sodales ut eu sem integer. Bibendum neque egestas congue quisque
          egestas diam in. Dignissim convallis aenean et tortor at risus
          viverra. Lectus arcu bibendum at varius vel pharetra. Sem fringilla ut
          morbi tincidunt. Montes nascetur ridiculus mus mauris vitae ultricies.
          Amet dictum sit amet justo donec enim. Tellus at urna condimentum
          mattis pellentesque id nibh tortor. Nunc mi ipsum faucibus vitae
          aliquet nec ullamcorper. Eu facilisis sed odio morbi quis commodo.
          Amet nisl suscipit adipiscing bibendum. Quis lectus nulla at volutpat
          diam ut venenatis tellus.
        </p>
        <br />
        <p>
          Risus pretium quam vulputate dignissim suspendisse in est ante in.
          Viverra mauris in aliquam sem. Eu lobortis elementum nibh tellus
          molestie. Non diam phasellus vestibulum lorem sed risus ultricies
          tristique. Interdum posuere lorem ipsum dolor. Eu sem integer vitae
          justo eget magna fermentum iaculis eu. Eu consequat ac felis donec.
          Nibh tortor id aliquet lectus proin nibh nisl condimentum. Sed id
          semper risus in hendrerit gravida rutrum. At quis risus sed vulputate
          odio. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.
          Pulvinar pellentesque habitant morbi tristique senectus et netus et.
          Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
          Nibh nisl condimentum id venenatis a. Id velit ut tortor pretium.
          Cursus vitae congue mauris rhoncus.
        </p>
        <br />
        <p>
          Nisl pretium fusce id velit ut. Tristique et egestas quis ipsum
          suspendisse ultrices gravida dictum fusce. Volutpat odio facilisis
          mauris sit amet massa vitae tortor. Purus ut faucibus pulvinar
          elementum integer enim. Mauris nunc congue nisi vitae suscipit tellus
          mauris a. Id leo in vitae turpis massa sed elementum tempus egestas.
          Et leo duis ut diam quam nulla porttitor massa. Egestas pretium aenean
          pharetra magna. Vulputate eu scelerisque felis imperdiet. Mattis enim
          ut tellus elementum sagittis vitae et leo duis. Id interdum velit
          laoreet id donec. Condimentum lacinia quis vel eros donec ac. Tempor
          orci eu lobortis elementum nibh tellus molestie nunc non. Faucibus
          scelerisque eleifend donec pretium vulputate sapien nec sagittis
          aliquam. Faucibus turpis in eu mi bibendum neque egestas congue
          quisque. Nibh praesent tristique magna sit amet purus gravida quis
          blandit.
        </p>
        <br />
        <p>
          Libero volutpat sed cras ornare arcu dui vivamus. Quis hendrerit dolor
          magna eget est. Elit at imperdiet dui accumsan. Tristique senectus et
          netus et malesuada. Purus sit amet luctus venenatis lectus magna
          fringilla urna. Amet nulla facilisi morbi tempus. Lobortis scelerisque
          fermentum dui faucibus. Convallis convallis tellus id interdum. Est
          pellentesque elit ullamcorper dignissim cras tincidunt lobortis
          feugiat. Sem fringilla ut morbi tincidunt augue. Tellus orci ac auctor
          augue mauris. Porta nibh venenatis cras sed felis eget. Vel turpis
          nunc eget lorem. Neque egestas congue quisque egestas diam in arcu.
          Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Neque gravida
          in fermentum et sollicitudin ac orci phasellus. Porttitor leo a diam
          sollicitudin tempor id eu. Euismod quis viverra nibh cras pulvinar
          mattis nunc sed.
        </p>
      </Page>
    )
  },
  {
    path: '/react',
    element: (
      <Page>
        <p>Information about React</p>
      </Page>
    )
  },
  {
    path: '/flex',
    element: (
      <Page>
        <p>Information about CSS Flex Boxes</p>
      </Page>
    )
  },
  {
    path: '/grid',
    element: (
      <Page>
        <p>Information about CSS Grid Layout</p>
      </Page>
    )
  },
  {
    path: '/vscode',
    element: (
      <Page>
        <p>Information about the VSCode Components</p>
      </Page>
    )
  },
  {
    path: '*',
    element: (
      <Page>
        <p className="text-slate-400">Error 404: Not found.</p>
      </Page>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
