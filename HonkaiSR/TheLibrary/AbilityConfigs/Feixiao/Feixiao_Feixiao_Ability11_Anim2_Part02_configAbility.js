const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability11_Anim2_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo1_DealSubDamage"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo1_DealDamage"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_Combo1_AfterDamageCheck"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Active: Fast-Forward Animations"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Feixiao_ComboPerformFinish"
    }
  ],
  "references": []
}