export default function Contact() {
  return (
    <div className="flex w-full items-center justify-between py-8">
      <div className="flex max-w-prose flex-col justify-between">
        <div className="flex w-fit items-end border-b pb-2">
          <h2 className="text-4xl font-semibold">Contact</h2>
        </div>

        <ul className="mt-6 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:haardik@learnweb3.io">haardik@learnweb3.io</a>
          </li>

          <li className="flex items-center gap-2">
            <span className="font-semibold">Twitter:</span>
            <a href="https://twitter.com/haardikkk">@haardikkk</a>
          </li>

          <li className="flex items-center gap-2">
            <span className="font-semibold">Farcaster:</span>
            <a href="https://warpcast.com/haardikkk">@haardikkk</a>
          </li>

          <li className="flex items-center gap-2">
            <span className="font-semibold">Github:</span>
            <a href="https://github.com/haardikk21">@haardikk21</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
