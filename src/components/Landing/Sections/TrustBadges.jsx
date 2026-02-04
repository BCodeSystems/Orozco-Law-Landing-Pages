import Image from "next/image";

export default function TrustBadges({ badges }) {
  return (
    <>
      <div className="mt-10 border-t border-gray-200 pt-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <Image
            src="/NTL-top-100-member-seal.png"
            alt={badges.ntlAlt}
            width={300}
            height={300}
            className="h-auto w-full max-w-[180px] sm:max-w-[220px]"
          />

          <Image
            src="/best-litigation-attorneys.png"
            alt={badges.bestLitAlt}
            width={1321}
            height={195}
            className="h-auto w-full max-w-[360px] sm:max-w-[520px]"
          />
        </div>
      </div>
    </>
  );
}