import Link from 'next/link';

function getAge(dateString: string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  console.log({ today, birthDate });
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function Hero() {
  const myAge = getAge('1999-05-21');

  return (
    <div className="flex w-full items-center justify-between py-8">
      <div className="flex max-w-prose flex-col justify-between">
        <div className="flex w-fit items-end border-b pb-2">
          <h2 className="text-4xl font-semibold">Hey, I&apos;m Haardik</h2>
          <span className="animate-wave text-4xl">👋</span>
        </div>

        <p className="[&:not(:first-child)]:mt-6">
          I&apos;m a {myAge} year old software engineer currently living in
          Canada. I&apos;m extremely curious and on a pursuit of knowledge.
          Currently I&apos;m running{' '}
          <Link href="https://learnweb3.io/" target="_blank">
            LearnWeb3
          </Link>{' '}
          - a free platform to help upskill developer students. I&quot;m
          relentlessly optimistic to the point of being annoying about it.
        </p>

        <p className="text-muted-foreground [&:not(:first-child)]:mt-6">
          Also, I legally do not have a first name. Ask me about it sometime.
        </p>
      </div>

      <img
        src="/haardik.jpeg"
        alt="Haardik's Headshot"
        className="h-40 rounded-full grayscale transition-all duration-300 hover:rotate-12 hover:scale-110 hover:grayscale-0"
      />
    </div>
  );
}
