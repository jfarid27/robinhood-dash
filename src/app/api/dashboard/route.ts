import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for Robinhood stock minting dashboard
  const mockData = {
    metrics: [
      {
        id: 1,
        title: 'Total Tokens Issued',
        value: '1,247,892',
        change: '+15.3%',
        changeType: 'positive',
        icon: 'trending-up'
      },
      {
        id: 2,
        title: 'USD Value',
        value: '$89.4M',
        change: '+8.7%',
        changeType: 'positive',
        icon: 'dollar-sign'
      },
      {
        id: 3,
        title: 'Transfers',
        value: '45,623',
        change: '+12.1%',
        changeType: 'positive',
        icon: 'users'
      }
    ],
    chartData: {
      labels: ['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'NFLX', 'AMD', 'CRM'],
      datasets: [
        {
          label: 'USD Value',
          data: [12500000, 8900000, 15600000, 11200000, 9800000, 13400000, 7600000, 5400000, 6800000, 4200000],
          backgroundColor: 'rgba(0, 255, 95, 0.8)',
          borderColor: 'rgba(0, 255, 95, 1)',
          borderWidth: 1
        }
      ]
    }
  };

  return NextResponse.json(mockData);
} 