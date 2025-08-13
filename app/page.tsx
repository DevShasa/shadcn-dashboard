import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
export default function Home() {
	return (
		<div className={"h-screen flex items-center justify-center"}>
			<Button variant={"default"} className="rounded-full">
        <Apple />
				Harro
			</Button>
		</div>
	);
}
