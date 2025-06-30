import { format } from "@formkit/tempo";

function Footer() {
  const readable = format(new Date(), "YYYY");

  return (
    <div className="intContainer intTextVerySmall">
      <p className="intTextCenter intAddPadding">
        Copyright (c) {readable} someiro. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
