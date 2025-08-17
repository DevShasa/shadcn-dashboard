"use client";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";

const TodoList = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [open, setOpen] = useState(false);
	return (
		<div>
			<h1 className="text-lg font-medium mb-6">Todo List</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full">
						<CalendarIcon />{" "}
						{date ? format(date, "PPP") : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0 w-auto">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
			<ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {[...Array(10).keys()].map((item: number, index: number) => {
                        return (
                            <Card className="p-4" key={index}>
                                <div className="flex items-center gap-4">
                                    <Checkbox id={`item${item}`} />
                                    <label
                                        htmlFor={`item${item}`}
                                        className="text-sm text-muted-foreground"
                                    >
                                        Lorem ipsum dolor sit amet hahaha
                                    </label>
                                </div>
                            </Card>
                        );
                    })}
                </div>
			</ScrollArea>
		</div>
	);
};

export default TodoList;
