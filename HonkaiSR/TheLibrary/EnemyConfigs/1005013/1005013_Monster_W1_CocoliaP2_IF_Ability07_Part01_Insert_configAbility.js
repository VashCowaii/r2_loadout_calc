const configAbility = {
  "fileName": "1005013_Monster_W1_CocoliaP2_IF_Ability07_Part01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1667812127\">CocoliaP2_Position</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W1_CocoliaP2_IF_Ability07_Part02_Insert",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}