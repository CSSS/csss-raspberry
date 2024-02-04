import React, { useState } from 'react';

import { Button } from '../../Button';
import * as Flex from '../../Flex';
import * as Icon from '../../Icon';
import { classList } from '../../helpers';

import './Thumbnails.css';

/**
 * Gallery of photos with thumbnails.
 * @param {object} props
 * @param {array} props.photos - File paths to full-resolution photos
 * @param {array} props.thumbnails - File paths to photo thumbnails
 * @param {string} props.maxWidth
 * - Maximum width for the selected photo (not expanded) (CSS expression)
 * @param {string} props.maxHeight
 * - Maximum height for the selected photo (not expanded) (CSS expression)
 */
export function Thumbnails(props) {
  const { photos, thumbnails, maxWidth, maxHeight } = props;

  const [selected, setSelected] = useState(0);
  const [expand, setExpand] = useState(false);

  const photo = (
    <img
      src={photos[selected - 1]}
      alt={`${selected}`}
      onClick={() => setExpand(true)}
      className='csss-gallery-thumbnails-img'
      style={{
        maxWidth: expand ? '100%' : maxWidth,
        maxHeight: expand ? '100%' : maxHeight,
        backgroundImage: `url(${thumbnails[selected - 1]})`
      }}
    />
  );

  const controls = (
    <Flex.Container flow='row nowrap' alignItems='center' gap='8px'>
      {/* decrement selection */}
      <Button
        className='small transparent icon'
        style={{ padding: '6px' }}
        onClick={() => {
          setSelected(selected > 1 ? selected - 1 : selected);
        }}
      >
        <Icon.Arrow style={{ transform: 'rotate(90deg)' }} />
      </Button>
      {/* current selection */}
      <p style={{ margin: '0 8px', fontSize: '10pt' }}>
        {selected} / {photos.length}
      </p>
      {/* increment selection */}
      <Button
        className='small transparent icon'
        style={{ padding: '6px' }}
        onClick={() => {
          setSelected(selected < photos.length ? selected + 1 : selected);
        }}
      >
        <Icon.Arrow style={{ transform: 'rotate(-90deg)' }} />
      </Button>
      {/* close selection */}
      <Button
        className='small transparent icon'
        style={{ padding: '6px' }}
        onClick={() => {
          setSelected(0);
          setExpand(false);
        }}
      >
        <Icon.Cross />
      </Button>
      {/* toggle expand */}
      <Button
        className='small transparent icon'
        style={{ padding: '6px' }}
        onClick={() => setExpand(!expand)}
      >
        {expand ? (
          <Icon.Shrink />
        ) : (
          <Icon.Expand />
        )}
      </Button>
    </Flex.Container>
  );

  return (
    <Flex.Container flow='column nowrap' alignItems='flex-start' gap='2px'>
      {selected !== 0 ? (
        <Flex.Container
          flow='column nowrap'
          justifyContent='center'
          alignItems='center'
          gap={expand ? '8px' : '2px'}
          className={expand ? 'csss-gallery-thumbnails-flex-expand' : undefined}
        >
          {expand ? (
            <Flex.Item style={{ overflow: 'hidden' }}>
              <a href={photos[selected - 1]}>{photo}</a>
            </Flex.Item>
          ) : photo}
          {controls}
        </Flex.Container>
      ) : (
        <p className='csss-gallery-thumbnails-prompt'>
          Click on a photo to view it.
        </p>
      )}
      <Flex.Container flow='row wrap' alignItems='center' gap='4px'>
        {thumbnails.map((thumbnail, index) =>
          <img
            src={thumbnail}
            alt={`${index + 1} (Thumbnail)`}
            onClick={() => setSelected(index + 1)}
            className={classList([
              'csss-gallery-thumbnails-thumbnail',
              selected === index + 1 ? 'selected' : ''
            ])}
          />
        )}
      </Flex.Container>
    </Flex.Container>
  );
}
