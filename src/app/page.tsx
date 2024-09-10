'use client';

import TextBox from '@/app/ui/textbox';
import { ChangeEvent, useEffect, useState } from 'react';

type SearchResponse = {
  results: string[];
  duration: number;
};

export default function Home() {
  const [input, setInput] = useState('');
  const [, setSearch] = useState<SearchResponse | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const search = async () => {
      if (!input) {
        setSearch(null);
        return;
      }
      const response = await fetch(`/api/search?q=${input}`);
      setSearch(await response.json());
    };

    void search();
  }, [input]);

  return (
    <div className="h-screen w-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-8 items-center justify-center">
        <TextBox
          label="Country"
          id="country"
          name="country"
          type="text"
          placeholder="Search for a country"
          value={input}
          onChange={handleChange}
          showLabel={false}
        />
      </main>
    </div>
  );
}
