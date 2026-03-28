const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability21_Part01",
  "childAbilityList": [
    "Sparxie_Sparxie_Ability21_Camera",
    "Sparxie_Sparxie_Ability21_Part01",
    "Sparxie_Sparxie_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sparxie_Ability21_Part02",
      "isTrigger": true
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"132499687\">Sparxie_Ability21_Effect</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}