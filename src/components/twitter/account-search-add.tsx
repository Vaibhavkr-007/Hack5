import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-hot-toast";

const TwitterSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const validateTwitterAccount = async (username: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/validate-twitter?username=${username}`);
      const data = await response.json();
      
      if (data.exists) {
        setSelectedAccounts((prev) => [...prev, username]);
        toast.success("User exists and added!");
      } else {
        toast.error("User does not exist!");
      }
    } catch (error) {
      toast.error("Error validating user!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 w-full max-w-md mx-auto">
      <div className="flex gap-2 w-full">
        <Input 
          type="text" 
          placeholder="Enter Twitter username" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => validateTwitterAccount(searchTerm)} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      <div className="mt-4 w-full">
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Selected Accounts</h3>
            <ul>
              {selectedAccounts.map((account, index) => (
                <li key={index} className="text-sm text-gray-700">@{account}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TwitterSearch;



