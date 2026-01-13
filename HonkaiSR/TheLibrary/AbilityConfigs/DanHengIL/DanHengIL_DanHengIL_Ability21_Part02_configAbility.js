const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "EXSkill01",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHengIL_BPCost_1"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHengIL_BPCost_2"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHengIL_BPCost_3"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHengIL_CancelAbility"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "DanHengIL_BPDisable"
    },
    "Trigger: Ability End"
  ],
  "references": []
}