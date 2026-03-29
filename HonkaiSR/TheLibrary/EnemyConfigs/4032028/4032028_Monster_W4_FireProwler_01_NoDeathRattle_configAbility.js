const configAbility = {
  "fileName": "4032028_Monster_W4_FireProwler_01_NoDeathRattle",
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