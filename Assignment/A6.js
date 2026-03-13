const rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "student", action: "WRITE", allowed: false },
  { role: "guest", action: "READ", allowed: false }
];

const allowedRules = rules.filter(rule => rule.allowed === true);

const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);

const summary = rules.reduce((acc, rule) => {
  acc[rule.role] = (acc[rule.role] || 0) + 1;
  return acc;
}, {});

console.log("allowedRules:", allowedRules);
console.log("allowedPairs:", allowedPairs);
console.log("summary:", summary);