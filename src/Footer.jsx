import { format } from "@formkit/tempo";

function Footer() {
  const readable = format(new Date(), "YYYY");

  return (
    <div className="intFooter">
      <p className="intTextCenter intTextVerySmall">
        Copyright (c) {readable} someiro. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
