import React, { useCallback, useState } from 'react';
import { VSCode } from 'csss-raspberry';

import primaryButtonImage from '../images/buttonsImages/PrimaryButtonImage.png';
import secondaryButtonImage from '../images/buttonsImages/SecondaryButtonImage.png';
import disabledButtonImage from '../images/buttonsImages/DisabledButtonImage.png';
import outlineButtonImage from '../images/buttonsImages/OutlineButtonImage.png';

export const VSCodeGuide = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClicked = useCallback(() => {
    console.log('clicked');
    setShowAlert(true);

    // Set a timeout to reset showAlert to false after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showAlert && (
        <VSCode.ModalAlert color="bg-green-400">
          <VSCode.Title
            text="✔ Application Submitted"
            className=""
            size="text-lg"
            align=""
            color="text-500"
          />
        </VSCode.ModalAlert>
      )}
      <div className="lg:pl-4 pt-24 lg:pt-3 lg:ml-80 lg:pr-8">
        <p className="font-300 text-white text-md ml-4 mt-3">
          Copy and paste these when you need them
        </p>
        <div className="flex flex-wrap gap-4 ml-4 mt-1">
          <p className="font-400 text-white text-3xl">↗</p>
          <p className="font-400 text-white text-3xl">↖</p>
          <p className="font-400 text-white text-3xl">↖</p>
          <p className="font-400 text-white text-3xl">↘</p>
          <p className="font-400 text-white text-3xl">↙</p>
          <p className="font-400 text-white text-3xl">←</p>
          <p className="font-400 text-white text-3xl">↓</p>
          <p className="font-400 text-white text-3xl">↑</p>
          <p className="font-400 text-white text-3xl">→</p>
        </div>

        <VSCode.Subtitle
          text="Click this button to test the alert component"
          className="mt-2 ml-0"
          color="text-white"
          size="text-lg"
          align="mr-auto"
        />

        {/* BUTTONS */}
        <div className="flex flex-wrap mt-16 gap-4">
          <div className="flex flex-col w-1/3 gap-4">
            <VSCode.PrimaryButton
              text="Join our Team ↗"
              className="ml-0"
              onClick={handleClicked}
            />
            <VSCode.CopyToClipboardButton
              className={'ml-4 mt-20 '}
              textToCopy={
                "<VSCode.PrimaryButton text='Join our Team ↗' className='mt-4 ml-4' onClick={handleClicked} />"
              }
            />
            <img className="w-full rounded-lg" src={primaryButtonImage}></img>
          </div>

          <div className="flex flex-col w-1/3 gap-4">
            <VSCode.OutlineButton
              text="Join our Team ↗"
              className="mt-4 ml-0"
              onClick={handleClicked}
            />
            <VSCode.CopyToClipboardButton
              className={'ml-4 mt-20 '}
              textToCopy={
                "<VSCode.PrimaryButton text='Join our Team ↗' className='mt-4 ml-4' onClick={handleClicked} />"
              }
            />
            <img className="w-full rounded-lg" src={outlineButtonImage}></img>
          </div>

          <div className="flex flex-col w-1/3 gap-4">
            <VSCode.SecondaryButton
              text="Join our Team ↗"
              className="mt-4 ml-0"
              onClick={handleClicked}
            />
            <VSCode.CopyToClipboardButton
              className={'ml-4 mt-20 '}
              textToCopy={
                "<VSCode.PrimaryButton text='Join our Team ↗' className='mt-4 ml-4' onClick={handleClicked} />"
              }
            />
            <img className="w-full rounded-lg" src={secondaryButtonImage}></img>
          </div>

          <div className="flex flex-col w-1/3 gap-4">
            <VSCode.DisabledButton
              text="Join our Team ↗"
              className="mt-4 ml-0"
              onClick={handleClicked}
            />
            <VSCode.CopyToClipboardButton
              className={'ml-4 mt-20 '}
              textToCopy={
                "<VSCode.PrimaryButton text='Join our Team ↗' className='mt-4 ml-4' onClick={handleClicked} />"
              }
            />
            <img className="w-full rounded-lg" src={disabledButtonImage}></img>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <VSCode.Title
            text="VSCode.Title Text"
            className="mt-4 ml-4"
            color="text-100"
            size="text-4xl"
            align="mr-auto"
          />

          <VSCode.Subtitle
            text="VSCode.Subtitle Text"
            className="mt-2 ml-4"
            color="text-white"
            size="text-3xl"
            align="mr-auto"
          />

          <VSCode.BodyText
            text="Body Text"
            className="mt-2 ml-4"
            color="text-white"
            size="text-2xl"
            align="mr-auto"
          />

          <VSCode.SubscriptText
            text="Subscript text"
            className="mt-2 ml-4"
            color="text-white"
            size="text-md"
            align="mr-auto"
          />
        </div>

        <div className="flex flex-col">
          <VSCode.SimpleInput
            className="mt-2 ml-4"
            type="text"
            placeholder="Name"
            title="Full Name"
            width="lg:w-1/3 w-10/12"
          />

          <VSCode.SimpleInput
            className="mt-2 ml-4"
            type="email"
            placeholder="Email"
            title="Email"
            width="lg:w-1/3 w-10/12"
          />

          <VSCode.SimpleInput
            className="mt-2 ml-4"
            type="password"
            placeholder="Password"
            title="Password"
            width="lg:w-1/3 w-10/12"
          />

          <VSCode.SimpleInput
            className="mt-2 ml-4"
            type="number"
            placeholder="Years of Study"
            title="Years of Study"
            width="lg:w-1/3 w-10/12"
          />

          <VSCode.SimpleInput
            className="mt-2 ml-4"
            type="date"
            title="Date"
            width="lg:w-1/3 w-10/12"
          />
        </div>

        <div className="ml-4 mr-4 mt-8 flex flex-wrap gap-5">
          <VSCode.Card className="" width="lg:w-1/3">
            <VSCode.Title
              text="VSCode.Card VSCode.Title"
              className=""
              size="text-3xl"
              align=""
              color="text-100"
            />

            <VSCode.Subtitle
              text="VSCode.Card VSCode.Subtitle"
              className="ml-1"
              color="text-white"
              size="text-md"
              align=""
            />

            <VSCode.BodyText
              text={`This is an example of a card for the new CSSS website.  This can be used in multiple places by simply calling <VSCode.Card />.`}
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-lg"
              align=""
            />

            <VSCode.SubscriptText
              text="Posted April 29 at 11:07am"
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-xs"
              align=""
            />
          </VSCode.Card>

          <VSCode.Card className="" width="lg:w-1/3">
            <VSCode.Title
              text="VSCode.Card VSCode.Title"
              className=""
              size="text-3xl"
              align=""
              color="text-100"
            />
            <VSCode.Subtitle
              text="VSCode.Card VSCode.Subtitle"
              className="ml-1"
              color="text-white"
              size="text-md"
              align=""
            />

            <VSCode.BodyText
              text={`This is an example of a card for the new CSSS website.  This can be used in multiple places by simply calling <VSCode.Card />.`}
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-lg"
              align=""
            />

            <VSCode.SubscriptText
              text="Posted April 29 at 11:07am"
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-xs"
              align=""
            />
          </VSCode.Card>

          <VSCode.Card className="" width="lg:w-1/3">
            <VSCode.Title
              text="VSCode.Card VSCode.Title"
              className=""
              size="text-3xl"
              align=""
              color="text-100"
            />
            <VSCode.Subtitle
              text="VSCode.Card VSCode.Subtitle"
              className="ml-1"
              color="text-white"
              size="text-md"
              align=""
            />

            <VSCode.BodyText
              text={`This is an example of a card for the new CSSS website.  This can be used in multiple places by simply calling <VSCode.Card />.`}
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-lg"
              align=""
            />

            <VSCode.SubscriptText
              text="Posted April 29 at 11:07am"
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-xs"
              align=""
            />
          </VSCode.Card>

          <VSCode.Card className="" width="lg:w-1/3">
            <VSCode.Title
              text="VSCode.Card VSCode.Title"
              className=""
              size="text-3xl"
              align=""
              color="text-100"
            />
            <VSCode.Subtitle
              text="VSCode.Card VSCode.Subtitle"
              className="ml-1"
              color="text-white"
              size="text-md"
              align=""
            />

            <VSCode.BodyText
              text={`This is an example of a card for the new CSSS website.  This can be used in multiple places by simply calling <VSCode.Card />.`}
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-lg"
              align=""
            />

            <VSCode.SubscriptText
              text="Posted April 29 at 11:07am"
              className="ml-1 mt-2 break-words"
              color="text-white"
              size="text-xs"
              align=""
            />
          </VSCode.Card>
        </div>
      </div>
      <VSCode.Footer />
    </>
  );
};
