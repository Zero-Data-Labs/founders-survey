import Link from "next/link"

import { Button } from "@/components/ui/button"
import { commonConfig } from "@/config/common"
import { buildFoundersPersonalityTraitsSurveyRequest } from "@/features/survey-request/utils"
import { buildVeridaRequestUrl } from "@/features/verida-request/utils"

const surveryRequest = buildFoundersPersonalityTraitsSurveyRequest()
const veridaRequestUrl = buildVeridaRequestUrl(
  surveryRequest,
  commonConfig.VERIDA_VAULT_BASE_URL
)

export default function RootPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex max-w-screen-sm flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">
          Founders Personality Traits Survey
        </h1>
        <p className="text-center text-sm text-muted-foreground">
          We want to survey your personality traits as a founder. This will help
          us understand your personality and how it affects your business.
        </p>
        <p className="text-center text-sm text-muted-foreground">
          This survey is anonymous. Your personality traits profile will be
          encrypted, securely stored and not linked to you. This is ensured by
          the use of privacy-preserving technologies such as{" "}
          <Link
            href="https://www.verida.network"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Verida
          </Link>{" "}
          and{" "}
          <Link
            href="https://nillion.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Nillion
          </Link>
          .
        </p>

        <Button asChild>
          <Link
            href={veridaRequestUrl.toString()}
            target="_blank"
            rel="noreferrer"
          >
            Start
          </Link>
        </Button>
      </div>
    </div>
  )
}
RootPage.displayName = "RootPage"
