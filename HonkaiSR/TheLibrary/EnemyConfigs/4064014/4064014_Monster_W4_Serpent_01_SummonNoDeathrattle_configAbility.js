const configAbility = {
  "fileName": "4064014_Monster_W4_Serpent_01_SummonNoDeathrattle",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "onAbort": [
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}