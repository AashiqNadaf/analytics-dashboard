import type { Order } from './interface';

export const ORDERS_TAB = 'Order List';

export const DUMMY_ORDERS: Order[] = [
  {
    id: 'ORD-002',
    user: 'Jane Smith',
    project: 'Mobile App Development',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    status: 'In Progress',
    date: new Date(Date.now() - 2 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-001',
    user: 'John Doe',
    project: 'E-commerce Website',
    address: '123 Main St, New York, NY 10001',
    status: 'Completed',
    date: new Date(Date.now() - 5 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-003',
    user: 'Mike Johnson',
    project: 'Data Analytics Dashboard',
    address: '789 Pine St, Chicago, IL 60601',
    status: 'Pending',
    date: new Date(Date.now() - 6 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-004',
    user: 'Sarah Wilson',
    project: 'UI/UX Design',
    address: '321 Elm St, Houston, TX 77001',
    status: 'Completed',
    date: new Date(Date.now() - 15 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-005',
    user: 'David Brown',
    project: 'Backend API',
    address: '654 Maple Dr, Phoenix, AZ 85001',
    status: 'In Progress',
    date: new Date(Date.now() - 30 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-006',
    user: 'Emily Davis',
    project: 'Cloud Migration',
    address: '987 Cedar Ln, Philadelphia, PA 19101',
    status: 'Completed',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-007',
    user: 'Robert Taylor',
    project: 'DevOps Setup',
    address: '147 Birch St, San Antonio, TX 78201',
    status: 'Pending',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-008',
    user: 'Lisa Anderson',
    project: 'Security Audit',
    address: '258 Spruce Ave, San Diego, CA 92101',
    status: 'In Progress',
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-009',
    user: 'Michael Chen',
    project: 'Database Optimization',
    address: '369 Willow St, Seattle, WA 98101',
    status: 'Completed',
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-010',
    user: 'Jennifer Lee',
    project: 'API Integration',
    address: '741 Poplar Ave, Denver, CO 80201',
    status: 'Approved',
    date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-011',
    user: 'Christopher Martinez',
    project: 'Frontend Redesign',
    address: '852 Ash St, Miami, FL 33101',
    status: 'In Progress',
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-012',
    user: 'Amanda Rodriguez',
    project: 'Mobile App Testing',
    address: '963 Hickory Ln, Atlanta, GA 30301',
    status: 'Rejected',
    date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-013',
    user: 'Daniel Kim',
    project: 'Performance Monitoring',
    address: '147 Sycamore Dr, Boston, MA 02101',
    status: 'Pending',
    date: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-014',
    user: 'Rachel Thompson',
    project: 'Content Management System',
    address: '258 Dogwood St, Dallas, TX 75201',
    status: 'In Progress',
    date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-015',
    user: 'Kevin White',
    project: 'Automated Testing Suite',
    address: '369 Magnolia Ave, San Francisco, CA 94101',
    status: 'Completed',
    date: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-016',
    user: 'Nicole Garcia',
    project: 'User Authentication',
    address: '741 Redwood Blvd, Portland, OR 97201',
    status: 'Pending',
    date: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-017',
    user: 'Brandon Wilson',
    project: 'Payment Gateway Integration',
    address: '852 Cypress St, Las Vegas, NV 89101',
    status: 'In Progress',
    date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-018',
    user: 'Stephanie Brown',
    project: 'Analytics Dashboard',
    address: '963 Juniper Ln, Nashville, TN 37201',
    status: 'Completed',
    date: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-019',
    user: 'Tyler Davis',
    project: 'Email Marketing System',
    address: '147 Pine St, Austin, TX 78701',
    status: 'Pending',
    date: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
  },
  {
    id: 'ORD-020',
    user: 'Megan Johnson',
    project: 'Inventory Management',
    address: '258 Oak Ave, Charlotte, NC 28201',
    status: 'In Progress',
    date: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000),
    userProfile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
  },
];
