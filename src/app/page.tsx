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
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Founders Personality Traits Survey</h1>
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
  )
}
RootPage.displayName = "RootPage"
