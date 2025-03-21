import Link from "next/link";
import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { UserInfo } from "@/modules/users/ui/components/user-info";
import { UserAvatar } from "@/components/user-avatar";

import { VideoMenu } from "./video-menu";
import { VideoThumbnail } from "./video-thumbnail";
import { VideoGetManyOutput } from "../../types";
